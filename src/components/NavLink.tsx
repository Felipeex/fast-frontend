/* libs */
import { Link, useLocation } from "react-router-dom";

/* interfaces */
import { NavLinkProps } from "../interfaces/Props";

export const NavLink = ({ path, title, onClick }: NavLinkProps) => {
  const location = useLocation();

  return (
    <Link to={path} onClick={onClick}>
      <div
        className={`bg-gradient-to-r from-[#1E1E22] py-4 rounded-lg px-6 max-w-sm ${
          location.pathname === path
            ? "border-l-8 border-green-600"
            : "opacity-50"
        } text-white`}
      >
        {title}
      </div>
    </Link>
  );
};
