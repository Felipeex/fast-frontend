export type ValidadeInputsSignUpType = (
  email: string,
  password: string,
  repeatPassword: string,
  setInputValidate: (validator: (inputValidate: any) => any) => void,
  setInputMessage: (message: (inputMessage: any) => any) => void
) => void;

export type ValidadeInputsSignInType = (
  email: string,
  password: string,
  setInputValidate: (validator: (inputValidate: any) => any) => void
) => void;

export type isInputValidateType = (
  setInputValidate: (validator: (inputValidate: any) => any) => void,
  rest: object
) => void;

export type ValidadeEmailAndPassword = (
  email: string,
  password: string,
  setInputValidate: (validator: (inputValidate: any) => any) => void
) => void;
