import { Link } from "react-router-dom"
import Logo from "../assets/img/logo.svg";

function Footer() {
  return (
    <div className="font-secondary mt-auto px-12 md:px-24 py-4 text-white">
        <div className="flex justify-between items-center mb-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="logo" />
            <p className="text-xl font-bold">Looker</p>
          </Link>
          <p className="max-w-40 md:max-w-none">We’re Always Happy To Help</p>
        </div>
        <p className="text-center border-t border-slate-400 pt-4 pb-6">© 2023 Looker. All rights reserved</p>
      </div>
  )
}

export default Footer