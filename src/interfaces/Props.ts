export interface InputProps {
  type: string;
  inputName: string;
  inputPlaceholder: string;
  inputIcon: React.ReactNode;
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
  click?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface SignInAndUpProps {
  setIsLogin: any;
}

export interface NavLinkProps {
  path: string;
  title: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
