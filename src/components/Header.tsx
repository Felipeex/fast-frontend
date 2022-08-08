/* libs */
import { List } from "phosphor-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { RoutesAll } from "../config/routesConfig";
import { useAuth } from "../contexts/AuthContext";

/* source */
import Logo from "../source/logo-fast.svg";
import { Hamburger } from "./Hamburger";
import { NavLink } from "./NavLink";
import { Profile } from "./Profile";

export function Header() {
  const { user, Logout } = useAuth();

  const [isHamburger, setIsHamburger] = useState(false);

  function handleHamburger() {
    setIsHamburger(!isHamburger);
  }

  async function handleSignOut() {
    await Logout();
  }

  return (
    <>
      <Hamburger
        isHamburger={isHamburger}
        handleHamburger={handleHamburger}
        handleSignOut={handleSignOut}
      />

      <header
        className={`flex items-center justify-between pt-[40px] px-5 md:px-10 transition-all md:justify-around`}
      >
        <Link to="/">
          <div className="flex items-center gap-1">
            <img
              src={Logo}
              className="fill-green-600"
              alt="fast delivery logo"
            />
            <span className="text-green-600 font-bold text-[26px] lg:block md:hidden">
              Fast Delivery
            </span>
          </div>
        </Link>
        <nav className="hidden gap-[42px] text-gray-600 ast-none font-medium cursor-pointer md:flex">
          <Link to="/" className="active:text-black-700">
            Home
          </Link>
          <a>Ferramentas</a>
          <a>Planos</a>
          <a>Sobre</a>
          <a>Blog</a>
        </nav>

        <List
          className={`${
            isHamburger ? "text-white" : "text-black-700"
          } z-10 md:hidden menu cursor-pointer`}
          size={38}
          onClick={handleHamburger}
        />

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
          <Profile />
        )}
      </header>
      <Outlet />
    </>
  );
}
