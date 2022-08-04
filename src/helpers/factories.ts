import { ValidadeEmail, ValidadePassword } from "./Patterns";

export function ValidadeInputsSignUp(
  email: string,
  password: string,
  repeatPassword: string,
  setInputValidate: (newState: object) => void,
  setInputMessage: (newState: object) => void
) {
  if (ValidadeEmail(email)) {
    setInputValidate((inputValidate: object) => ({
      ...inputValidate,
      email: true,
    }));
  } else {
    setInputValidate((inputValidate: object) => ({
      ...inputValidate,
      email: false,
    }));
  }

  if (password && password.length <= 5) {
    setInputMessage((inputMessage: object) => ({
      ...inputMessage,
      password: "Sua senha está muito Fraca!",
    }));
  } else {
    setInputMessage((inputMessage: object) => ({
      ...inputMessage,
      password: "",
    }));
  }

  if (ValidadePassword(password)) {
    setInputValidate((inputValidate: object) => ({
      ...inputValidate,
      password: true,
    }));
  } else {
    setInputValidate((inputValidate: object) => ({
      ...inputValidate,
      password: false, // tirar de true
    }));
  }

  if (password !== repeatPassword) {
    setInputMessage((inputMessage: object) => ({
      ...inputMessage,
      repeatPassword: "As senhas não sé considem",
    }));
    setInputValidate((inputValidate: object) => ({
      ...inputValidate,
      repeatPassword: false,
    }));
  } else if (ValidadePassword(password)) {
    setInputValidate((inputValidate: object) => ({
      ...inputValidate,
      repeatPassword: true,
    }));
  } else {
    setInputMessage((inputMessage: object) => ({
      ...inputMessage,
      repeatPassword: "",
    }));
  }
}

type ValidadeInputsSignInType = (
  email: string,
  password: string,
  setInputValidate: (validator: (inputValidate: any) => any) => void
) => void;

export const ValidadeInputsSignIn: ValidadeInputsSignInType = (
  email,
  password,
  setInputValidate
) => {
  if (ValidadeEmail(email)) {
    setInputValidate((inputValidate) => ({
      ...inputValidate,
      email: true,
    }));
  } else {
    setInputValidate((inputValidate: object) => ({
      ...inputValidate,
      email: false,
    }));
  }

  if (ValidadePassword(password)) {
    setInputValidate((inputValidate: object) => ({
      ...inputValidate,
      password: true,
    }));
  } else {
    setInputValidate((inputValidate: object) => ({
      ...inputValidate,
      password: false,
    }));
  }
};
