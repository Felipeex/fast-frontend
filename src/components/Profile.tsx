import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useAuth } from "../contexts/AuthContext";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function Profile() {
  const { user } = useAuth();
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
        <div className="p-3 origin-top-right absolute right-0 bg-black-600 rounded-lg">
          <Menu.Item>
            <div className="flex items-center">
              <div className="bg-green-600 w-12 h-12 rounded-full overflow-hidden flex">
                {user.photoURL ? <img src={user.photoURL} /> : ""}
              </div>
              <span className="text-white ml-2 font-medium">
                {user.displayName ? user.displayName : "Sem nome"} <br />{" "}
                <p className="font-normal text-gray-200">{user?.email}</p>
              </span>
            </div>
          </Menu.Item>

          <div className="flex gap-2 flex-col mt-4">
            <Menu.Item>
              <div className="bg-gradient-to-r from-[#1E1E22] py-4 rounded-lg px-6 max-w-sm border-l-8 border-green-600 text-white">
                Home
              </div>
            </Menu.Item>

            <Menu.Item>
              <div className="bg-gradient-to-r from-[#1E1E22] py-4 rounded-lg px-6 max-w-sm border-l-8 border-green-600 text-white">
                Home
              </div>
            </Menu.Item>

            <Menu.Item>
              <div className="bg-gradient-to-r from-[#1E1E22] py-4 rounded-lg px-6 max-w-sm border-l-8 border-green-600 text-white">
                Home
              </div>
            </Menu.Item>

            <Menu.Item>
              <div className="border border-red-500 py-4 rounded-lg px-6 max-w-sm text-center text-red-500 hover:bg-red-500 hover:text-black-600 font-medium cursor-pointer">
                SAIR
              </div>
            </Menu.Item>
          </div>
        </div>
      </Transition>
    </Menu>
  );
}
