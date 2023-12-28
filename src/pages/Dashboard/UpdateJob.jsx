import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FloatingInput from "../../components/FloatingInput";
import Button from "../../components/Button";

const UpdateJob = () => {
  const navigateTo = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
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

  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
      .then((res) => {
        const {
          title,
          job_description,
          job_qualification,
          job_type,
          job_tenure,
          job_status,
          company_name,
          company_image_url,
          company_city,
          salary_min,
          salary_max,
        } = res.data;

        setValues({
          title,
          job_description,
          job_qualification,
          job_type,
          job_tenure,
          job_status,
          company_name,
          company_image_url,
          company_city,
          salary_min,
          salary_max,
        });
      });
  }, [id]);
  const handleSubmit = (event) => {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    event.preventDefault();
    axios
      .put(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`,
        values,
        {
          headers: headers,
        },
      )
      .then(() => {
        navigateTo("/dashboard");
      });
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
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          label="title"
          type="text"
          placeholder="title"
          required
        />
        <FloatingInput
          value={values.job_description}
          onChange={(e) =>
            setValues({ ...values, job_description: e.target.value })
          }
          label="job_description"
          type="text"
          placeholder="job description"
          required
        />
        <FloatingInput
          value={values.job_qualification}
          onChange={(e) =>
            setValues({ ...values, job_qualification: e.target.value })
          }
          label="job_qualification"
          type="text"
          placeholder="job qualification"
          required
        />
        <div className="mb-4 grid gap-x-4 md:grid-cols-2">
          <FloatingInput
            value={values.job_type}
            onChange={(e) => setValues({ ...values, job_type: e.target.value })}
            label="job_type"
            type="text"
            placeholder="job type"
            required
          />
          <FloatingInput
            value={values.job_tenure}
            onChange={(e) =>
              setValues({ ...values, job_tenure: e.target.value })
            }
            label="job_tenure"
            type="text"
            placeholder="job tenure"
            required
          />
          <FloatingInput
            value={values.job_status}
            onChange={(e) =>
              setValues({ ...values, job_status: e.target.value })
            }
            label="job_status"
            type="number"
            placeholder="job status"
            required
          />
          <FloatingInput
            value={values.company_name}
            onChange={(e) =>
              setValues({ ...values, company_name: e.target.value })
            }
            label="company_name"
            type="text"
            placeholder="company name"
            required
          />
          <FloatingInput
            value={values.company_image_url}
            onChange={(e) =>
              setValues({ ...values, company_image_url: e.target.value })
            }
            label="company_image_url"
            type="text"
            placeholder="company image URL"
            required
          />
          <FloatingInput
            value={values.company_city}
            onChange={(e) =>
              setValues({ ...values, company_city: e.target.value })
            }
            label="company_city"
            type="text"
            placeholder="company city"
            required
          />
          <FloatingInput
            value={values.salary_min}
            onChange={(e) =>
              setValues({ ...values, salary_min: e.target.value })
            }
            label="salary_min"
            type="number"
            placeholder="min salary"
            required
          />
          <FloatingInput
            value={values.salary_max}
            onChange={(e) =>
              setValues({ ...values, salary_max: e.target.value })
            }
            label="salary_max"
            type="number"
            placeholder="max salary"
            required
          />
        </div>
        <div className="mb-4 w-full text-center text-white">
          <Button type="submit" name={"Update Job"} />
        </div>
      </form>
    </div>
  );
};

export default UpdateJob;
