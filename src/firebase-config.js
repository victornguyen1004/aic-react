import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Removed for security reason
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
