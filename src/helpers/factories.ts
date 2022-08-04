import { ValidadeEmail, ValidadePassword } from "./Patterns";

export interface ValidadeInputsSignUp {
  email: string;
  password: string;
  repeatPassword: string;
  inputValidate: object;
  inputMessage: object;
  setInputValidate: (newState: object) => void;
  setInputMessage: (newState: object) => void;
}

export function ValidadeInputsSignUp<ValidadeInputsSignUp>(
  email,
  password,
  repeatPassword,
  inputValidate,
  setInputValidate,
  inputMessage,
  setInputMessage
) {
  if (ValidadeEmail(email)) {
    setInputValidate((inputValidate) => ({ ...inputValidate, email: true }));
  } else {
    setInputValidate((inputValidate) => ({ ...inputValidate, email: false }));
  }

  if (password && password.length <= 5) {
    setInputMessage((inputMessage) => ({
      ...inputMessage,
      password: "Sua senha está muito Fraca!",
    }));
  } else {
    setInputMessage((inputMessage) => ({
      ...inputMessage,
      password: "",
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
      password: false, // tirar de true
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
}
