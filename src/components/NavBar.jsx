import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
const Navbar = () => {
  const navMenus = [
    { name: "Home", path: "/" },
    { name: "Vacancy", path: "/job-vacancy" },
    { name: "Register", path: "/register" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className="bg-primary sticky top-0 flex h-16 w-full items-center justify-between px-8 py-4 font-primary">
      <NavLink to="/" className="flex items-center gap-2 text-white">
        <img src={logo} alt="logo" />
        <p className="font-secondary text-xl font-bold">Looker</p>
      </NavLink>
      <div
        className={`bg-primary absolute left-0 grid w-full items-center gap-2 px-6 py-2 pb-4 text-white md:static md:z-auto md:flex md:w-auto md:gap-4 ${
          open ? "top-16 " : "bottom-full"
        }`}
      >
        {navMenus.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.path}
            className={
              menu.name === "Register"
                ? "rounded-md bg-gradient-to-b from-violet-500 to-violet-800 px-8 py-2 md:ml-16"
                : ({ isActive }) =>
                    isActive
                      ? "active px-4 py-2 text-violet-500"
                      : "md:hover:bg-primary px-4 py-2 hover:rounded-md hover:bg-violet-500 md:hover:text-violet-500"
            }
          >
            {menu.name}
          </NavLink>
        ))}
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="text-2xl text-white md:hidden"
        aria-label="toggle menu"
      >
        {open ? <HiX /> : <HiMenu />}
      </button>
    </nav>
  );
};
export default Navbar;
