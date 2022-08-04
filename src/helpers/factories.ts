import {
  isInputValidateType,
  ValidadeInputsSignInType,
  ValidadeInputsSignUpType,
} from "../types/inputs";
import { ValidadeEmail, ValidadePassword } from "./Patterns";

export const ValidadeInputsSignUp: ValidadeInputsSignUpType = (
  email,
  password,
  repeatPassword,
  setInputValidate,
  setInputMessage
) => {
  if (ValidadeEmail(email)) {
    setInputValidate((inputValidate) => ({
      ...inputValidate,
      email: true,
    }));
  } else {
    setInputValidate((inputValidate) => ({
      ...inputValidate,
      email: false,
    }));
  }

  if (ValidadePassword(password)) {
    setInputMessage((inputMessage) => ({
      ...inputMessage,
      password: "",
    }));
  } else {
    if (!password.length) return;
    setInputMessage((inputMessage) => ({
      ...inputMessage,
      password: "Sua senha está muito Fraca!",
    }));
  }

  if (ValidadePassword(password)) {
    setInputValidate((inputValidate) => ({
      ...inputValidate,
      password: true,
    }));
  } else {
    setInputValidate((inputValidate) => ({
      ...inputValidate,
      password: false,
    }));
  }

  if (password !== repeatPassword) {
    setInputMessage((inputMessage) => ({
      ...inputMessage,
      repeatPassword: "As senhas não sé considem",
    }));
    setInputValidate((inputValidate) => ({
      ...inputValidate,
      repeatPassword: false,
    }));
  } else if (ValidadePassword(password)) {
    setInputValidate((inputValidate) => ({
      ...inputValidate,
      repeatPassword: true,
    }));
  } else {
    setInputMessage((inputMessage) => ({
      ...inputMessage,
      repeatPassword: "",
    }));
  }
};

export const ValidadeInputsSignIn: ValidadeInputsSignInType = (
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

const isInputValidate: isInputValidateType = (setInputValidate, ...rest) => {
  setInputValidate((inputValidate) => ({
    ...inputValidate,
    ...rest[0],
  }));
};
