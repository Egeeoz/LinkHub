'use client';
import { auth, db } from '../firebase/client';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const handleRegister = async (
  email,
  password,
  companyName,
  organizationNumber
) => {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', newUser.user.uid), {
      email: email,
      companyName,
      organizationNumber,
    });

    return { success: true, user: newUser.user };
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message || 'Error creating user' };
  }
};

export const handleLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    await attachUserDataToSession(userCredential);

    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, message: 'Error logging user in' };
  }
};

export const attachUserDataToSession = async (userCredential) => {
  const idToken = await userCredential.user.getIdToken();
  const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
  const userData = userDoc.data();

  await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token: idToken,
      email: userCredential.user.email,
      data: userData,
    }),
  });
  window.location.reload();
};

export const handleLogout = async () => {
  try {
    await signOut(auth);

    await fetch('/api/auth/logout', {
      method: 'POST',
    });
    window.location.assign('/');
  } catch (error) {
    return { success: false, message: 'Error logging user out' };
  }
};

export const handleAddCompanyInfo = async (formData) => {
  try {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      return { success: false, message: 'No user logged in' };
    }

    const userRef = doc(db, 'users', currentUser.uid);
    const userDoc = await getDoc(userRef);

    const userData = userDoc.data();

    const updatedData = {};
    if (formData.services) updatedData.services = formData.services;
    if (formData.hourOpen) updatedData.hourOpen = formData.hourOpen;
    if (formData.hourClose) updatedData.hourClose = formData.hourClose;
    if (formData.address) updatedData.address = formData.address;

    await setDoc(userRef, { ...userData, ...updatedData }, { merge: true });

    await attachUserDataToSession({ user: currentUser });

    return { success: true, message: 'Company info updated successfully' };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'Error updating company info',
    };
  }
};
