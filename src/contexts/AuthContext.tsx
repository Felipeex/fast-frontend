import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextProps {
  children: ReactNode;
}

type AuthContextType = {
  user: object;
  setUser: (newState: object) => void;
};

const initialState = {
  user: {},
  setUser: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialState);

export function AuthContextProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState(initialState.user);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
