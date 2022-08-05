import { ReactNode } from "react";

export interface InputProps {
  type: string;
  inputName: string;
  inputPlaceholder: string;
  inputIcon: ReactNode;
  inputPattern?: string;
  inputLabel?: string;
  isInputLabel?: boolean;
  setValue: (newState: string) => void;
  inputValidate?: boolean;
  inputMessage?: string;
}

export interface HeaderProps {
  isFixed?: boolean;
}

export interface LoginIconProps {
  icon: React.ReactNode;
  color: string;
  click?: () => void;
}

export interface SignInAndUpProps {
  setIsLogin: any;
}
