import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../services/firebaseConfig";

export const createUserEmailAndPassword = (email: string, password: string) =>
  new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        resolve(userCredential);
      })
      .catch((error) => {
        reject(error);
      });
  });
