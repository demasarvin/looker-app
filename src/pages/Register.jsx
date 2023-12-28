import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FloatingInput from "../components/FloatingInput";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Register() {
  const navigateTo = useNavigate();

  const [input, setInput] = useState({
    name: "",
    imageUrl: "",
    email: "",
    password: "",
  });

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
        />
        <FloatingInput
          value={input.imageUrl}
          onChange={handleInput}
          label="imageUrl"
          type="text"
          placeholder="image URL"
        />
        <FloatingInput
          value={input.email}
          onChange={handleInput}
          label="email"
          type="email"
          placeholder="email"
        />
        <FloatingInput
          value={input.password}
          onChange={handleInput}
          label="password"
          type="password"
          placeholder="password"
        />
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
