import { useState } from "react";
import logo from "../../assets/img/logo.svg";
import {
  HiX,
  HiMenuAlt2,
  HiChartPie,
  HiClipboardList,
  HiDocumentAdd,
  HiUser,
  HiKey,
  HiLogout,
} from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
// eslint-disable-next-line react/prop-types
const LayoutDashboard = ({ children }) => {
  const navigateTo = useNavigate();
  let [open, setOpen] = useState(false);
  let userDetails = JSON.parse(localStorage.getItem("user"));
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="rounded-lg text-2xl sm:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                {open ? <HiX /> : <HiMenuAlt2 />}
              </button>
              <Link to="/" className="ms-4 flex md:me-24">
                <img src={logo} className="me-2 h-8" alt="FlowBite Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold sm:text-2xl">
                  Looker App
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="relative ms-3 flex items-center">
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300"
                  aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={userDetails.image_url}
                    alt="user photo"
                  />
                </button>
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 top-8 z-50 mt-2 w-48 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                    role="menu"
                  >
                    <div className="py-1" role="none">
                      <p className="px-4 py-2 text-sm text-gray-900">
                        {userDetails.name}
                      </p>
                      <p className="px-4 py-2 text-sm font-medium text-gray-900">
                        {userDetails.email}
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <button
                          onClick={() => {
                            Cookies.remove("token");
                            navigateTo("/login");
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                          role="menuitem"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-200 bg-white pt-20 transition-transform sm:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-white px-3 pb-4">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <HiChartPie className="text-2xl" />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/list-job-vacancy"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <HiClipboardList className="text-2xl" />
                <span className="ms-3">List Jobs</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/list-job-vacancy/form"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <HiDocumentAdd className="text-2xl" />
                <span className="ms-3 flex-1 whitespace-nowrap">
                  Add New Job
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/profile"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <HiUser className="text-2xl" />
                <span className="ms-3 flex-1 whitespace-nowrap">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/change-password"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <HiKey className="text-2xl" />
                <span className="ms-3 flex-1 whitespace-nowrap">
                  Change Password
                </span>
              </Link>
            </li>
            <li>
              {Cookies.get("token") && (
                <button
                  onClick={() => {
                    Cookies.remove("token");
                    navigateTo("/login");
                  }}
                  className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                >
                  <HiLogout className="text-2xl" />
                  <span className="ms-3 flex-1 whitespace-nowrap">Logout</span>
                </button>
              )}
            </li>
          </ul>
        </div>
      </aside>
      <div className="mt-14 sm:ml-64">{children}</div>
    </div>
  );
};

export default LayoutDashboard;
