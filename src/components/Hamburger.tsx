/* libs */
import { Link } from "react-router-dom";

/* config */
import { RoutesAll } from "../config/routesConfig";

/* contexts */
import { useAuth } from "../contexts/AuthContext";
import { hamburgerProps } from "../interfaces/Props";

/* components */
import { NavLink } from "./NavLink";

export function Hamburger({
  isHamburger,
  handleHamburger,
  handleSignOut,
}: hamburgerProps) {
  const { user } = useAuth();
  return (
    <>
      {isHamburger && (
        <div className="w-screen max fixed z-10 right-0 bg-black-600 md:hidden text-white flex flex-col gap-3 menu py-9 px-3">
          {!user ? (
            <div className="mb-5">
              <Link
                to="/login?type=signIn"
                className="mr-5 font-medium cursor-pointer border py-[14px] px-[24px] rounded-[30px] hover:text-black-600 hover:bg-white transition-colors"
                onClick={handleHamburger}
              >
                Fazer Login
              </Link>
              <Link to="/login" onClick={handleHamburger}>
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

          {RoutesAll.map(
            (index) =>
              index.isRouteVisible &&
              (index.isAuth ? (
                user && (
                  <NavLink
                    path={index.path}
                    title={index.title}
                    key={index.title}
                    onClick={handleHamburger}
                  />
                )
              ) : (
                <NavLink
                  path={index.path}
                  title={index.title}
                  key={index.title}
                  onClick={handleHamburger}
                />
              ))
          )}

          {user ? (
            <>
              <div
                onClick={handleSignOut}
                className="border border-red-500 py-4 rounded-lg px-6 max-w-sm text-center text-red-500 hover:bg-red-500 hover:text-black-600 font-medium cursor-pointer"
              >
                SAIR
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}
