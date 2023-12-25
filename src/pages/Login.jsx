import { Link } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import FloatingInput from "../components/FloatingInput";

function Login() {
  return (
    <div className="flex min-h-screen flex-col bg-primary">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="mx-auto my-8 w-80 rounded-md bg-white p-8 md:w-96">
          <h1 className="mb-10 text-center font-primary text-2xl font-bold">
            Login To Your Account
          </h1>
          <FloatingInput name={"email"} type={"email"} placeholder={"email"} />
          <FloatingInput
            name={"password"}
            type={"password"}
            placeholder={"password"}
          />
          <div className="mb-4 w-full text-center text-white">
            <Button name={"Login"} />
          </div>
          <p className="font-primary text-sm">
            Don’t have an account yet? {""}
            <Link to="/login" className="text-violet-500">
              Register
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
