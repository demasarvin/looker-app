import { Link } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import FloatingInput from "../components/FloatingInput";

function Register() {
  return (
    <div className="flex min-h-screen flex-col bg-primary">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="mx-auto my-8 w-80 md:w-96 rounded-md bg-white p-8">
          <h1 className="mb-4 text-center font-primary text-2xl font-bold">
            Create Your Account
          </h1>
          <FloatingInput name={"name"} type={"text"} placeholder={"name"}/>
          <FloatingInput name={"imageUrl"} type={"text"} placeholder={"image URL"}/>
          <FloatingInput name={"email"} type={"email"} placeholder={"email"}/>
          <FloatingInput name={"password"} type={"password"} placeholder={"password"}/>
          <div className="text-white w-full text-center mb-4">
            <Button name={"Register"} />
          </div>
          <p className="font-primary text-sm">Already have an account? <Link to="/login" className="text-violet-500">Login here</Link></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
