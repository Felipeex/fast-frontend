import { isInputValidateType } from "../types/inputValidate";

export const isInputValidate: isInputValidateType = (
  setInputValidate,
  ...rest
) => {
  setInputValidate((inputValidate) => ({
    ...inputValidate,
    ...rest[0],
  }));
};

export const isInputMessage: isInputValidateType = (
  setInputMessage,
  ...rest
) => {
  setInputMessage((inputMessage) => ({
    ...inputMessage,
    ...rest[0],
  }));
};
