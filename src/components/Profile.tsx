/* libs */
import { Menu, Transition } from "@headlessui/react";
import { forwardRef, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

/* config */
import { RoutesAll } from "../config/routesConfig";

/* contexts */
import { useAuth } from "../contexts/AuthContext";

/* interfaces */
import { NavLinkProps } from "../interfaces/Props";

const NavLink = forwardRef(({ title, path }: NavLinkProps, ref: any) => {
  const location = useLocation();
  return (
    <Link to={path}>
      <div
        ref={ref}
        className={`bg-gradient-to-r from-[#1E1E22] py-4 rounded-lg px-6 ${
          location.pathname === path
            ? "border-l-8 border-green-600"
            : "opacity-50"
        } text-white`}
      >
        {title}
      </div>
    </Link>
  );
});

export function Profile() {
  const { user, Logout } = useAuth();

  async function handleSignOut() {
    await Logout();
  }

  return (
    <Menu as="div" className="relative text-left hidden md:block">
      <div>
        <Menu.Button>
          <div className="bg-green-600 w-12 h-12 rounded-full overflow-hidden">
            {user.photoURL ? <img src={user.photoURL} /> : ""}
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="p-3 origin-top-right absolute right-0 bg-black-600 rounded-lg min-w-[300px]">
          <Menu.Item>
            <div className="flex items-center">
              <div className="bg-green-600 w-12 h-12 rounded-full overflow-hidden flex">
                {user.photoURL ? <img src={user.photoURL} /> : ""}
              </div>
              <span className="text-white ml-2 font-medium">
                {user.displayName ? user.displayName : "Sem nome"} <br />{" "}
                <p className="font-normal text-gray-200 text-xs">
                  {user?.email}
                </p>
              </span>
            </div>
          </Menu.Item>

          <div className="flex gap-2 flex-col mt-4">
            {RoutesAll.map((index) =>
              index.isRouteVisible ? (
                <Menu.Item key={index.path}>
                  <NavLink path={index.path} title={index.title} />
                </Menu.Item>
              ) : (
                ""
              )
            )}

            <Menu.Button>
              <div
                onClick={handleSignOut}
                className="border border-red-500 py-4 rounded-lg px-6 max-w-sm text-center text-red-500 hover:bg-red-500 hover:text-black-600 font-medium cursor-pointer"
              >
                SAIR
              </div>
            </Menu.Button>
          </div>
        </div>
      </Transition>
    </Menu>
  );
}
