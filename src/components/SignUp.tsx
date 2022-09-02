/* libs*/
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleNotch, EnvelopeSimple, Password } from "phosphor-react";

/* components */
import { Input } from "./Input";
import { LoginIcon } from "./LoginIcon";

/* source */
import Google from "../source/google-icon.svg";
import Twitter from "../source/twitter-icon.svg";
import SignInWallpaper from "../source/signin-wallpaper.svg";

/* helpers */
import { ValidadeInputsSignUp } from "../lib/inputValidate";

/* interfaces */
import { SignInAndUpProps } from "../interfaces/Props";
import { inputMessage, InputValidate } from "../interfaces/inputs";
import {
  handleCreateEmailAndPasswordUtil,
  handleSignInGoogleUtil,
} from "../helpers/util/sign";

export function SignUp({ setIsLogin }: SignInAndUpProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [inputValidate, setInputValidate] = useState<InputValidate>({});
  const [inputMessage, setInputMessage] = useState<inputMessage>({});

  const [loading, setLoading] = useState(false);

  async function handleCreateEmailAndPassword(
    event: React.MouseEvent<HTMLElement>
  ) {
    event.preventDefault();
    setLoading(true);
    await handleCreateEmailAndPasswordUtil(email, password)
      .then(() => {
        navigate("/login?type=signIn");
      })
      .finally(() => {
        setLoading(false);
      });
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
    ValidadeInputsSignUp(
      email,
      password,
      repeatPassword,
      setInputValidate,
      setInputMessage
    );
  }, [email, password, repeatPassword]);

  return (
    <main className="w-full flex justify-around overflow-hidden">
      <form className="login__animation">
        <h1 className="font-medium text-3xl xl:text-[50px]">Crie sua conta</h1>
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
          isInputLabel={false}
          inputLabel="Esqueci minha senha"
          setValue={setPassword}
          inputValidate={inputValidate?.password}
          inputMessage={inputMessage?.password}
        />
        <Input
          type="password"
          inputName="Confirmar senha"
          inputPlaceholder="Digite sua senha"
          inputIcon={<Password size={22} />}
          isInputLabel={false}
          inputLabel="Esqueci minha senha"
          setValue={setRepeatPassword}
          inputValidate={inputValidate?.repeatPassword}
          inputMessage={inputMessage?.repeatPassword}
        />
        <button
          onClick={handleCreateEmailAndPassword}
          disabled={
            loading
              ? true
              : !inputValidate.email ||
                !inputValidate.password ||
                !inputValidate.repeatPassword
          }
          className="w-full flex items-center justify-center bg-green-600 py-4 rounded-[5px] font-medium text-white mt-14 hover:bg-green-700 transition-colors outline-gray-600 disabled:opacity-50 disabled:hover:bg-green-600"
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
          Já tenho uma conta?
          <span className="text-green-600 cursor-pointer" onClick={setIsLogin}>
            {" "}
            Fazer Login
          </span>
        </p>

        <div className="flex gap-4 items-center justify-center mt-6">
          <LoginIcon
            icon={<img src={Google} />}
            color="bg-white"
            click={handleSignInGoogle}
          />
          <LoginIcon icon={<img src={Twitter} />} color="bg-blue-800" />
        </div>
      </form>
      <img
        src={SignInWallpaper}
        className="wallpaper__animation hidden lg:block"
        alt="wallpaper de login de conta"
      />
    </main>
  );
}
