import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Auth } from "../services/firebaseConfig";
import {
  ValidadeInputsSignInType,
  ValidadeInputsSignUpType,
} from "../types/inputs";

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
