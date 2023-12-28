import { useState } from "react";
import FloatingInput from "../../components/FloatingInput";
import Button from "../../components/Button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChangePassword = () => {
  const navigateTo = useNavigate();
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
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
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.post(
          "https://dev-example.sanbercloud.com/api/change-password",
          input,
          {
            headers: headers,
          },
        );
        console.log("Data berhasil dikirim", response.data);
        navigateTo("/dashboard");
      } catch (error) {
        console.log(error.response.data);
      }
  };
  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="mx-auto my-8 w-80 rounded-md bg-white p-8 md:w-96">
        <h1 className="mb-4 text-center font-primary text-2xl font-bold">
          Change Password
        </h1>

        <FloatingInput
          value={input.current_password}
          onChange={handleInput}
          label="current_password"
          type="password"
          placeholder="current password"
          required
        />
        <FloatingInput
          value={input.new_password}
          onChange={handleInput}
          label="new_password"
          type="password"
          placeholder="new password"
          required
        />
        <FloatingInput
          value={input.new_confirm_password}
          onChange={handleInput}
          label="new_confirm_password"
          type="password"
          placeholder="confirm password"
          required
        />
        <div className="mb-4 w-full text-center text-white">
          <Button type="submit" name={"Change Password"} />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
