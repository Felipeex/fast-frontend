import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import { Auth } from "../../services/firebaseConfig";

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

export const signInEmailAndPassword = (email: string, password: string) =>
  new Promise((resolve, reject) => {
    signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        resolve(userCredential);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const signInGoogle = () =>
  new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();

    signInWithRedirect(Auth, provider)
      .then((userCredential) => {
        resolve(userCredential);
      })
      .catch((error) => {
        reject(error);
      });
  });
