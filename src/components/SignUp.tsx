import { EnvelopeSimple, Password } from "phosphor-react";

import { Input } from "./Input";
import { LoginIcon } from "./LoginIcon";

import Apple from "../source/apple-icon.svg";
import Google from "../source/google-icon.svg";
import Twitter from "../source/twitter-icon.svg";
import SignInWallpaper from "../source/signin-wallpaper.svg";

interface Props {
  setIsLogin: any;
}

export function SignUp({ setIsLogin }: Props) {
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
        <button className="w-full bg-green-600 py-4 rounded-[5px] font-medium text-white mt-[55px] hover:bg-green-700 transition-colors outline-gray-600">
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
