import { EnvelopeSimple, Password } from "phosphor-react";

import { Input } from "./Input";
import { LoginIcon } from "./LoginIcon";

import Apple from "../source/apple-icon.svg";
import Google from "../source/google-icon.svg";
import Twitter from "../source/twitter-icon.svg";
import SignInWallpaper from "../source/signin-wallpaper.svg";
import { createUserEmailAndPassword } from "../helpers/util";

interface Props {
  setIsLogin: any;
}

export function SignUp({ setIsLogin }: Props) {
  async function createEmailAndPassword(event: Event) {
    event.preventDefault();
    try {
      const created = await createUserEmailAndPassword(
        "felipeoficial455@gmail.com",
        ""
      );
      console.log(created);
    } catch (err: any) {
      console.log(err.code);
      if (err.code === "auth/weak-password")
        return console.log("Sua senha deve conter pelo menos 6 dígitos.");
      if (err.code === "auth/invalid-email")
        return console.log("Email invalido, Tente Novamente.");
      if (err.code === "auth/email-already-in-use")
        return console.log("Esse email já fou utilizado, Tente outro.");
      if (err.code === "auth/internal-error")
        return console.log(
          "Aconteceu um erro, Tente novamente ou volte mas tarde."
        );
    }
  }

  return (
    <main className="w-full flex justify-around overflow-hidden">
      <form className="login__animation">
        <h1 className="font-medium text-[50px]">Crie sua conta</h1>
        <Input
          inputName="Email"
          inputPlaceholder="Digite seu e-mail"
          inputIcon={<EnvelopeSimple size={22} />}
        />
        <Input
          inputName="Senha"
          inputPlaceholder="Digite sua senha"
          inputIcon={<Password size={22} />}
          isInputLabel={false}
          inputLabel="Esqueci minha senha"
        />
        <Input
          inputName="Confirmar senha"
          inputPlaceholder="Digite sua senha"
          inputIcon={<Password size={22} />}
          isInputLabel={false}
          inputLabel="Esqueci minha senha"
        />
        <button
          onClick={createEmailAndPassword}
          className="w-full bg-green-600 py-4 rounded-[5px] font-medium text-white mt-[55px] hover:bg-green-700 transition-colors outline-gray-600"
        >
          ENTRAR
        </button>
        <p className="text-center mt-2 text-gray-600">
          Já tenho uma conta?
          <span className="text-green-600 cursor-pointer" onClick={setIsLogin}>
            {" "}
            Fazer Login
          </span>
        </p>

        <div className="flex gap-4 items-center justify-center mt-6">
          <LoginIcon icon={<img src={Apple} />} color="bg-black-700" />
          <LoginIcon icon={<img src={Google} />} color="bg-white" />
          <LoginIcon icon={<img src={Twitter} />} color="bg-blue-800" />
        </div>
      </form>
      <img
        src={SignInWallpaper}
        className="wallpaper__animation"
        alt="wallpaper de login de conta"
      />
    </main>
  );
}
