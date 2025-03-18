'use client';
import { auth, db } from '../firebase/client';
import { doc, setDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
    const user = await signInWithEmailAndPassword(auth, email, password);

    const idToken = await user.user.getIdToken();

    await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: idToken }),
    });
    return { success: true, user: user.user };
  } catch (error) {
    return { success: false, message: 'Error logging user in' };
  }
};
