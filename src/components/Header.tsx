import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../source/logo-fast.svg";

interface Props {
  isFixed?: boolean;
}

export function Header({ isFixed }: Props) {
  const { user } = useAuth();

  return (
    <header
      className={`flex items-center justify-around mt-[40px] transition-all ${
        isFixed ? "fixed top-0 w-full bg-white mt-0 py-[20px]" : ""
      }`}
    >
      <div className="flex items-center gap-1">
        <img src={Logo} className="fill-green-600" alt="fast delivery logo" />
        <span className="text-green-600 font-bold text-[26px]">
          Fast Delivery
        </span>
      </div>

      <nav className="flex gap-[42px] text-gray-600 ast-none font-medium cursor-pointer">
        <Link to="/" className="active:text-black-700">
          Home
        </Link>
        <a>Ferramentas</a>
        <a>Planos</a>
        <a>Sobre</a>
        <a>Blog</a>
      </nav>

      <div>
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
    </header>
  );
}
