'use client';
import { auth, db } from '../firebase/client';
import { doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore';
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
      organizationNumber,
      companyInfo: {
        companyName,
        services: '',
        hourOpen: '',
        hourClose: '',
        address: '',
      },
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
  const data = userDoc.data();
  await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token: idToken,
      email: userCredential.user.email,
      data,
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

    const fieldsToUpdate = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== '') {
        fieldsToUpdate[key] = formData[key];
      }
    });

    const updatedCompanyInfo = {
      ...userData.companyInfo,
      ...fieldsToUpdate,
    };

    await setDoc(
      userRef,
      { ...userData, companyInfo: updatedCompanyInfo },
      { merge: true }
    );

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
