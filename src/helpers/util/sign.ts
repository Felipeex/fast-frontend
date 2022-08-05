import { toast } from "react-toastify";
import { createUserEmailAndPassword, signInEmailAndPassword } from "./promise";

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
    throw new Error(err.code);
  }
};
