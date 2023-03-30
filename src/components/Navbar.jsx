// React JS
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="">
      <ul className="flex gap-x-5">
        <li>
          <NavLink
            to="/mi-cuenta"
            className={({ isActive }) => !isActive ? "font-semibold text-sm px-5 py-4" : "font-semibold text-sm bg-white/20 px-5 py-4 rounded-full"}
          >
            Panel
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/viajes"
            className={({ isActive }) => !isActive ? "font-semibold text-sm px-5 py-4" : "font-semibold text-sm bg-white/20 px-5 py-4 rounded-full"}
          >
            Viajes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ayuda"
            className={({ isActive }) => !isActive ? "font-semibold text-sm px-5 py-4" : "font-semibold text-sm bg-white/20 px-5 py-4 rounded-full"}
          >
            Ayuda
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
