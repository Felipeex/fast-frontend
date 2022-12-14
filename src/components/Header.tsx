/* libs */
import { List } from "phosphor-react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

/* contexts */
import { useAuth } from "../contexts/AuthContext";

/* source */
import Logo from "../source/logo-fast.svg";
import { Hamburger } from "./Hamburger";
import { Profile } from "./Profile";

export function Header() {
  const { user, Logout } = useAuth();
  const location = useLocation();

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
        className={`flex items-center justify-between pt-10 px-5 md:px-10 transition-all md:justify-around`}
      >
        <Link to="/">
          <div className="flex items-center gap-1">
            <img
              src={Logo}
              className="fill-green-600"
              alt="fast delivery logo"
            />
            <span className="text-green-600 font-bold text-2xl lg:block md:hidden">
              Fast Delivery
            </span>
          </div>
        </Link>
        <nav className="hidden gap-11 text-gray-600 ast-none font-medium cursor-pointer md:flex">
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? "text-black-700" : ""
            } flex flex-col items-center justify-center relative`}
          >
            Home
            {location.pathname === "/" ? (
              <div className="w-2 h-2 bg-green-600 rounded-full absolute -bottom-2" />
            ) : (
              ""
            )}
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
              <button className="bg-black-600 py-3 px-6 text-white rounded-3xl font-medium">
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
