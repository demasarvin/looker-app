import { useState } from "react";
import FloatingInput from "../../components/FloatingInput";
import axios from "axios";
import Cookies from "js-cookie";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  const navigateTo = useNavigate();
  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 0,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
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
        "https://dev-example.sanbercloud.com/api/job-vacancy",
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
      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-8 mt-4 w-80 rounded-md bg-white md:w-3/4"
      >
        <h1 className="mb-4 text-center font-primary text-2xl font-bold">
          Create New Job
        </h1>

        <FloatingInput
          value={input.title}
          onChange={handleInput}
          label="title"
          type="text"
          placeholder="title"
          isRequired={true}
        />
        <FloatingInput
          value={input.job_description}
          onChange={handleInput}
          label="job_description"
          type="text"
          placeholder="job description"
          isRequired={true}
        />
        <FloatingInput
          value={input.job_qualification}
          onChange={handleInput}
          label="job_qualification"
          type="text"
          placeholder="job qualification"
          isRequired={true}
        />
        <div className="mb-4 grid gap-x-4 md:grid-cols-2">
          <FloatingInput
            value={input.job_type}
            onChange={handleInput}
            label="job_type"
            type="text"
            placeholder="job type"
            isRequired={true}
          />
          <FloatingInput
            value={input.job_tenure}
            onChange={handleInput}
            label="job_tenure"
            type="text"
            placeholder="job tenure"
            isRequired={true}
          />
          <FloatingInput
            value={input.job_status}
            onChange={handleInput}
            label="job_status"
            type="number"
            placeholder="job status"
            isRequired={true}
          />
          <FloatingInput
            value={input.company_name}
            onChange={handleInput}
            label="company_name"
            type="text"
            placeholder="company name"
            isRequired={true}
          />
          <FloatingInput
            value={input.company_image_url}
            onChange={handleInput}
            label="company_image_url"
            type="text"
            placeholder="company image URL"
            isRequired={true}
          />
          <FloatingInput
            value={input.company_city}
            onChange={handleInput}
            label="company_city"
            type="text"
            placeholder="company city"
            isRequired={true}
          />
          <FloatingInput
            value={input.salary_min}
            onChange={handleInput}
            label="salary_min"
            type="number"
            placeholder="min salary"
            isRequired={true}
          />
          <FloatingInput
            value={input.salary_max}
            onChange={handleInput}
            label="salary_max"
            type="number"
            placeholder="max salary"
            isRequired={true}
          />
        </div>
        <div className="mb-4 w-full text-center text-white">
          <Button type="submit" name={"Create Job"} />
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
