/* libs*/
import { List } from "phosphor-react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

/* types */
import { HeaderProps } from "../interfaces/Props";

/* source */
import Logo from "../source/logo-fast.svg";

export function Header({ isFixed }: HeaderProps) {
  const { user } = useAuth();

  return (
    <header
      className={`flex items-center justify-between mt-[40px] px-5 md:px-10 transition-all md:justify-around ${
        isFixed ? "fixed top-0 w-full bg-white mt-0 py-[20px]" : ""
      }`}
    >
      <div className="flex items-center gap-1">
        <img src={Logo} className="fill-green-600" alt="fast delivery logo" />
        <span className="text-green-600 font-bold text-[26px] lg:block md:hidden">
          Fast Delivery
        </span>
      </div>

      <nav className="hidden gap-[42px] text-gray-600 ast-none font-medium cursor-pointer md:flex">
        <Link to="/" className="active:text-black-700">
          Home
        </Link>
        <a>Ferramentas</a>
        <a>Planos</a>
        <a>Sobre</a>
        <a>Blog</a>
      </nav>

      <List className="text-black-700 md:hidden" size={38} />

      {!user ? (
        <div className="hidden md:block">
          <Link
            to="/login?type=signIn"
            className="mr-5 font-medium cursor-pointer"
          >
            Fazer Login
          </Link>
          <Link to="/login">
            <button className="bg-black-600 py-[14px] px-[24px] text-white rounded-[30px] font-medium">
              Cadastrar
            </button>
          </Link>
        </div>
      ) : (
        <div className="bg-green-600 w-12 h-12 rounded-full overflow-hidden hidden md:block">
          {user.photoURL ? <img src={user.photoURL} /> : ""}
        </div>
      )}
    </header>
  );
}
