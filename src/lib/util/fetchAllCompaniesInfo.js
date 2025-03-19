import { db } from '@/lib/firebase/client';
import { collection, getDocs } from 'firebase/firestore';

export const fetchAllCompanyInfo = async () => {
  const snapshot = await getDocs(collection(db, 'users'));
  return snapshot.docs.map((doc) => doc.data());
};
