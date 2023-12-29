import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FloatingInput from "../components/FloatingInput";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Register() {
  const navigateTo = useNavigate();

  const [input, setInput] = useState({
    name: "",
    imageUrl: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://dev-example.sanbercloud.com/api/register",
        input,
      );
      let { token } = response.data;
      Cookies.set("token", token);
      navigateTo("/login");
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-8 w-80 rounded-md bg-white p-8 md:w-96"
      >
        <h1 className="mb-4 text-center font-primary text-2xl font-bold">
          Create Your Account
        </h1>

        <FloatingInput
          value={input.name}
          onChange={handleInput}
          label="name"
          type="text"
          placeholder="name"
          isRequired={true}
        />
        <FloatingInput
          value={input.imageUrl}
          onChange={handleInput}
          label="imageUrl"
          type="text"
          placeholder="image URL"
          isRequired={true}
        />
        <FloatingInput
          value={input.email}
          onChange={handleInput}
          label="email"
          type="email"
          placeholder="email"
          isRequired={true}
        />
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="peer block w-full appearance-none rounded-md border border-gray-400 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-violet-500 focus:outline-none focus:ring-0"
            placeholder=" "
            value={input.password}
            onChange={handleInput}
            required={true}
          />
          <label
            htmlFor="password"
            className="required absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm capitalize text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-violet-500"
          >
            Password
          </label>
          <div
            className="absolute end-3 top-4 cursor-pointer text-gray-500"
            onClick={handleTogglePassword}
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </div>
        </div>
        <div className="mb-4 w-full text-center text-white">
          <Button type="submit" name={"Register"} />
        </div>
        <p className="font-primary text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-violet-500">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
