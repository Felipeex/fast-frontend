import {
  ValidadeEmailAndPassword,
  ValidadeInputsSignInType,
  ValidadeInputsSignUpType,
} from "../types/inputValidate";
import { ValidadeEmail, ValidadePassword } from "../helpers/patterns";
import { isInputMessage, isInputValidate } from "../helpers/factories";
import { passwordMessage } from "../constants/messageConfig";

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

  const {
    passwordLength,
    passwordLowerCase,
    passwordUpperCase,
    passwordNumber,
  } = passwordMessage;

  if (password.length) {
    if (password.length < 6)
      return isInputMessage(setInputMessage, {
        password: passwordLength,
      });
    if (!password.match(/[A-Z]/))
      return isInputMessage(setInputMessage, {
        password: passwordUpperCase,
      });
    if (!password.match(/[a-z]/))
      return isInputMessage(setInputMessage, {
        password: passwordLowerCase,
      });
    if (!password.match(/[0-9]/))
      return isInputMessage(setInputMessage, {
        password: passwordNumber,
      });
    if (ValidadePassword(password))
      return isInputMessage(setInputMessage, {
        password: "",
      });
  } else {
    isInputMessage(setInputMessage, { password: "" });
  }

  if (repeatPassword.length) {
    if (repeatPassword !== password) {
      isInputMessage(setInputMessage, {
        repeatPassword: "Senha não sé coincidem",
      });
      isInputValidate(setInputValidate, { repeatPassword: false });
    } else {
      isInputMessage(setInputMessage, {
        repeatPassword: "",
      });
      isInputValidate(setInputValidate, { repeatPassword: true });
    }
  } else {
    isInputMessage(setInputMessage, { repeatPassword: "" });
  }
};
