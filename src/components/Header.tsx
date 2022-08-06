/* libs*/
import { List } from "phosphor-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

/* source */
import Logo from "../source/logo-fast.svg";

export function Header() {
  const { user } = useAuth();
  console.log(user);
  const [isHamburger, setIsHamburger] = useState(false);

  function handleHamburger() {
    setIsHamburger(!isHamburger);
  }

  return (
    <>
      {isHamburger && (
        <div className="w-screen max fixed z-10 right-0 bg-black-600 md:hidden text-white flex flex-col gap-3 menu py-9 px-3">
          {!user ? (
            <div className="mb-5">
              <Link
                to="/login?type=signIn"
                className="mr-5 font-medium cursor-pointer border py-[14px] px-[24px] rounded-[30px] hover:text-black-600 hover:bg-white transition-colors"
              >
                Fazer Login
              </Link>
              <Link to="/login">
                <button className="bg-black-700 py-[14px] px-[24px] text-white rounded-[30px] font-medium">
                  Cadastrar
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex mb-5 items-center">
              <div className="bg-green-600 w-12 h-12 rounded-full overflow-hidden flex">
                {user.photoURL ? <img src={user.photoURL} /> : ""}
              </div>
              <span className="text-white ml-2 font-medium">
                {user.displayName ? user.displayName : "Sem nome"} <br />{" "}
                <p className="font-normal text-gray-200">{user?.email}</p>
              </span>
            </div>
          )}

          <div className="bg-gradient-to-r from-[#1E1E22] py-4 rounded-lg px-6 max-w-sm border-l-8 border-green-600">
            Home
          </div>

          <div className="bg-gradient-to-r from-[#1E1E22] py-4 rounded-lg px-6 max-w-sm border-l-8 border-green-600">
            Home
          </div>

          <div className="bg-gradient-to-r from-[#1E1E22] py-4 rounded-lg px-6 max-w-sm border-l-8 border-green-600">
            Home
          </div>

          <div className="border border-red-500 py-4 rounded-lg px-6 max-w-sm text-center text-red-500 hover:bg-red-500 hover:text-black-600 font-medium cursor-pointer">
            SAIR
          </div>
        </div>
      )}
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
          <div className="bg-green-600 w-12 h-12 rounded-full overflow-hidden hidden md:block">
            {user.photoURL ? <img src={user.photoURL} /> : ""}
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
}
