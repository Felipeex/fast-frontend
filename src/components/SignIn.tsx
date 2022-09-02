/* libs */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleNotch, EnvelopeSimple, Password } from "phosphor-react";

/* components */
import { Input } from "./Input";
import { LoginIcon } from "./LoginIcon";

/* source */
import Google from "../source/google-icon.svg";
import Twitter from "../source/twitter-icon.svg";
import SignUpWallpaper from "../source/signup-wallpaper.svg";

/* helpers */
import {
  handleSignInEmailAndPasswordUtil,
  handleSignInGoogleUtil,
} from "../helpers/util/sign";
import { ValidadeInputsSignIn } from "../lib/inputValidate";

/* interfaces */
import { SignInAndUpProps } from "../interfaces/Props";
import { InputValidate } from "../interfaces/inputs";

export function SignIn({ setIsLogin }: SignInAndUpProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputValidate, setInputValidate] = useState<InputValidate>({});

  async function handleSignInEmailAndPassword(
    event: React.MouseEvent<HTMLElement>
  ) {
    event.preventDefault();
    setLoading(true);
    await handleSignInEmailAndPasswordUtil(email, password)
      .then(() => {
        navigate("/");
      })
      .finally(() => {
        setLoading(false);
      });
    setLoading(false);
  }

  async function handleSignInGoogle(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    await handleSignInGoogleUtil()
      .then(() => {
        navigate("/");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    ValidadeInputsSignIn(email, password, setInputValidate);
  }, [email, password]);

  return (
    <main className="w-full flex justify-around overflow-hidden">
      <form className="login__animation">
        <h1 className="font-medium text-3xl xl:text-[50px]">Fazer Login</h1>
        <Input
          type="email"
          inputName="Email"
          inputPlaceholder="Digite seu e-mail"
          inputIcon={<EnvelopeSimple size={22} />}
          setValue={setEmail}
          inputValidate={inputValidate?.email}
        />
        <Input
          type="password"
          inputName="Senha"
          inputPlaceholder="Digite sua senha"
          inputIcon={<Password size={22} />}
          isInputLabel={true}
          inputLabel="Esqueci minha senha"
          setValue={setPassword}
          inputValidate={inputValidate?.password}
        />
        <button
          className="w-full flex items-center justify-center bg-green-600 py-4 rounded-[5px] font-medium text-white mt-14 hover:bg-green-700 transition-colors outline-gray-600 disabled:opacity-50 disabled:hover:bg-green-600"
          disabled={
            loading ? true : !inputValidate.email || !inputValidate.password
          }
          onClick={handleSignInEmailAndPassword}
        >
          {loading ? (
            <CircleNotch
              size={20}
              className="loading text-white"
              weight="bold"
            />
          ) : (
            "ENTRAR"
          )}
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
            icon={<img src={Google} alt="logo google" />}
            color="bg-white"
            click={handleSignInGoogle}
          />
          <LoginIcon
            icon={<img src={Twitter} alt="logo twitter" />}
            color="bg-blue-800"
          />
        </div>
      </form>
      <img
        src={SignUpWallpaper}
        className="wallpaper__animation hidden lg:block"
        alt="wallpaper de criação de conta"
      />
    </main>
  );
}
