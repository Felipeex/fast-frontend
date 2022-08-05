import { toast } from "react-toastify";
import { internalError } from "./erros";
import {
  createUserEmailAndPassword,
  signInEmailAndPassword,
  signInGoogle,
} from "./promise";

/* handleSign */
export const handleSignInEmailAndPasswordUtil = async (
  email: string,
  password: string
) => {
  try {
    const signIn = await signInEmailAndPassword(email, password);
    return signIn;
  } catch (err: any) {
    if (err.code === "auth/user-not-found") {
      toast.error("Este usuário não existe, Tente novamente.");
    }

    if (err.code === "auth/wrong-password") {
      toast.error("Senha incorreta, Tente novamente.");
    }
    throw new Error(err.code);
  }
};

export const handleCreateEmailAndPasswordUtil = async (
  email: string,
  password: string
) => {
  try {
    await createUserEmailAndPassword(email, password);
    toast.success("Conta criada com sucesso!");
  } catch (err: any) {
    if (err.code === "auth/email-already-in-use") {
      toast.error("Esse email já foi usado, Tente novamente.");
    }
    throw new Error(err.code);
  }
};

export const handleSignInGoogleUtil = async () => {
  try {
    const signIn = await signInGoogle();
    return signIn;
  } catch (err: any) {
    internalError();
    throw new Error(err);
  }
};
