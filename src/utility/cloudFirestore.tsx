import { getFirestore, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { app } from './firebase_setup';
import { getCookie } from './cookies';
export const getUser = async (uid: string) => {
  const db = getFirestore(app);
  // const userRef = collection(db, "users");
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return false;
  }
};
export const registerUser = async (name: string) => {
  const db = getFirestore(app);
  const userRef = collection(db, 'users');
  const uid = getCookie('uid');
  if (uid) {
    await setDoc(doc(userRef, uid!), {
      name: name,
    });
  }
  return true;
};
