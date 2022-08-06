import { Link, useLocation } from "react-router-dom";
import { NavLinkProps } from "../interfaces/Props";

export const NavLink = ({ path, title }: NavLinkProps) => {
  const location = useLocation();

  return (
    <Link to={path}>
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
