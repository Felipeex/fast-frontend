import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

type Props = { children: React.ReactElement };

export const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { user, loading } = useAuth();

  return user ? children : <Navigate to="/login" />;
};
