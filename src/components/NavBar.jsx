import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import { useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Cookies from "js-cookie";
const Navbar = () => {
  const navMenus = [
    { name: "Home", path: "/" },
    { name: "Vacancy", path: "/job-vacancy" },
  ];
  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null);
  const closeNavbar = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  document.addEventListener("mousedown", closeNavbar);
  return (
    <nav ref={navbarRef} className="sticky top-0 z-50 flex h-16 w-full items-center justify-between bg-primary px-8 py-4 font-primary">
      <NavLink to="/" className="flex items-center gap-2 text-white">
        <img src={logo} alt="logo" />
        <p className="font-secondary text-xl font-bold">Looker</p>
      </NavLink>
      <div
        className={`absolute left-0 grid w-full items-center gap-2 bg-primary px-6 py-2 pb-4 text-white md:static md:z-auto md:flex md:w-auto md:gap-4 ${
          open ? "top-16 " : "bottom-full"
        }`}
      >
        {navMenus.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.path}
            className={({ isActive }) =>
              isActive
                ? "active px-4 py-2 text-violet-500"
                : "px-4 py-2 hover:rounded-md hover:bg-violet-500 md:hover:bg-primary text-white md:hover:text-violet-500"
            }
          >
            {menu.name}
          </NavLink>
        ))}
        {!Cookies.get("token") && (
          <NavLink to="/register">
            <button className="rounded-md bg-gradient-to-b from-violet-500 to-violet-800 px-8 py-2">
              Register
            </button>
          </NavLink>
        )}
        {Cookies.get("token") && (
          <>
          <NavLink to="/dashboard" className={({ isActive }) =>
              isActive
                ? "active px-4 py-2 text-violet-500"
                : "px-4 py-2 hover:rounded-md hover:bg-violet-500 md:hover:bg-primary md:hover:text-violet-500"
            }>Dashboard</NavLink>
          <NavLink to="/login">
            <button
              onClick={() => {
                Cookies.remove("token");
              }}
              className="rounded-md bg-gradient-to-b from-violet-500 to-violet-800 px-8 py-2"
            >
              Logout
            </button>
          </NavLink>
          </>
        )}
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
