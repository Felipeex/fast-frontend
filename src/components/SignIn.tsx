import { EnvelopeSimple, Password } from "phosphor-react";

import { Input } from "./Input";
import { LoginIcon } from "./LoginIcon";

import Apple from "../source/apple-icon.svg";
import Google from "../source/google-icon.svg";
import Twitter from "../source/twitter-icon.svg";
import SignUpWallpaper from "../source/signup-wallpaper.svg";

interface Props {
  setIsLogin: any;
}

export function SignIn({ setIsLogin }: Props) {
  return (
    <main className="w-full flex justify-around overflow-hidden">
      <form className="login__animation">
        <h1 className="font-medium text-[50px]">Fazer Login</h1>
        <Input
          inputName="Email"
          inputPlaceholder="Digite seu e-mail"
          inputIcon={<EnvelopeSimple size={22} />}
        />
        <Input
          inputName="Senha"
          inputPlaceholder="Digite sua senha"
          inputIcon={<Password size={22} />}
          isInputLabel={true}
          inputLabel="Esqueci minha senha"
        />
        <button className="w-full bg-green-600 py-4 rounded-[5px] font-medium text-white mt-[55px] hover:bg-green-700 transition-colors">
          ENTRAR
        </button>
        <p className="text-center mt-2 text-gray-600">
          Não tenho conta?
          <span
            className="text-green-600 cursor-pointer"
            onClick={() => setIsLogin(false)}
          >
            {" "}
            Registre-se
          </span>
        </p>

        <div className="flex gap-4 items-center justify-center mt-6">
          <LoginIcon
            icon={<img src={Apple} alt="logo apple" />}
            color="bg-black-700"
          />
          <LoginIcon
            icon={<img src={Google} alt="logo google" />}
            color="bg-white"
          />
          <LoginIcon
            icon={<img src={Twitter} alt="logo twitter" />}
            color="bg-blue-800"
          />
        </div>
      </form>
      <img
        src={SignUpWallpaper}
        className="wallpaper__animation"
        alt="wallpaper de criação de conta"
      />
    </main>
  );
}
