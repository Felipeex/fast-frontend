import {
  isInputValidateType,
  ValidadeEmailAndPassword,
  ValidadeInputsSignInType,
  ValidadeInputsSignUpType,
} from "../types/inputValidate";
import { ValidadeEmail, ValidadePassword } from "./Patterns";

export const isInputValidate: isInputValidateType = (
  setInputValidate,
  ...rest
) => {
  setInputValidate((inputValidate) => ({
    ...inputValidate,
    ...rest[0],
  }));
};

const isInputMessage: isInputValidateType = (setInputMessage, ...rest) => {
  setInputMessage((inputMessage) => ({
    ...inputMessage,
    ...rest[0],
  }));
};

const ValidadeEmailAndPassword: ValidadeEmailAndPassword = (
  email,
  password,
  setInputValidate
) => {
  if (ValidadeEmail(email)) {
    isInputValidate(setInputValidate, { email: true });
  } else {
    isInputValidate(setInputValidate, { email: false });
  }

  if (ValidadePassword(password)) {
    isInputValidate(setInputValidate, { password: true });
  } else {
    isInputValidate(setInputValidate, { password: false });
  }
};

export const ValidadeInputsSignIn: ValidadeInputsSignInType = (
  email,
  password,
  setInputValidate
) => {
  ValidadeEmailAndPassword(email, password, setInputValidate);
};

export const ValidadeInputsSignUp: ValidadeInputsSignUpType = (
  email,
  password,
  repeatPassword,
  setInputValidate,
  setInputMessage
) => {
  ValidadeEmailAndPassword(email, password, setInputValidate);

  if (ValidadePassword(repeatPassword)) {
    isInputValidate(setInputValidate, { repeatPassword: true });
  } else {
    isInputValidate(setInputValidate, { repeatPassword: false });
  }
};
