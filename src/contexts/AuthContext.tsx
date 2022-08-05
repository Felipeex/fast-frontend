/* libs*/
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { internalError } from "../helpers/util/erros";
import { Auth } from "../services/firebaseConfig";

interface AuthContextProps {
  children: ReactNode;
}

type AuthContextType = {
  user: any;
  setUser: (newState: any) => void;
  Logout: () => any;
};

const initialState = {
  user: {},
  setUser: () => {},
  Logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialState);

export function AuthContextProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState(initialState.user);

  useEffect(() => {
    const subscribe = onAuthStateChanged(Auth, (currentUser: any) => {
      setUser(currentUser);
    });
    return subscribe;
  }, []);

  const Logout = async () => {
    return signOut(Auth).catch((err) => {
      internalError();
      throw new Error(err);
    });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
