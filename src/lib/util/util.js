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
    const idToken = await userCredential.user.getIdToken();

    const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
    const companyName = userDoc.exists() ? userDoc.data().companyName : '';
    const organizationNumber = userDoc.exists()
      ? userDoc.data().organizationNumber
      : '';

    await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: idToken,
        email: userCredential.user.email,
        companyName,
        organizationNumber,
      }),
    });
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, message: 'Error logging user in' };
  }
};

export const handleLogout = async () => {
  try {
    await signOut(auth);

    await fetch('/api/auth/logout', {
      method: 'POST',
    });
  } catch (error) {
    return { success: false, message: 'Error logging user out' };
  }
};
