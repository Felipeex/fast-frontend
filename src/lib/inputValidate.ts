import {
  ValidadeEmailAndPassword,
  ValidadeInputsSignInType,
  ValidadeInputsSignUpType,
} from "../types/inputValidate";
import { ValidadeEmail, ValidadePassword } from "../helpers/Patterns";
import { isInputMessage, isInputValidate } from "../helpers/factories";

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

  if (password.length) {
    if (password.length < 6) {
      isInputMessage(setInputMessage, {
        password: "Sua senha deve conter pelos menos 6 Dígitos",
      });
    } else if (!password.match(/[A-Z]/)) {
      isInputMessage(setInputMessage, {
        password: "Sua senha deve conter pelos 1 Letra maiúscula",
      });
    } else if (!password.match(/[a-z]/)) {
      isInputMessage(setInputMessage, {
        password: "Sua senha deve conter pelos 1 Letra minúscula",
      });
    } else if (!password.match(/[0-9]/)) {
      isInputMessage(setInputMessage, {
        password: "Sua senha deve conter 1 numero",
      });
    } else if (ValidadePassword(password)) {
      isInputMessage(setInputMessage, {
        password: "",
      });
    }
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
