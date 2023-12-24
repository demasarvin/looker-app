import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

function JobVacancy() {
  const [jobs, setJobs] = useState([]);

  const formattedRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setJobs(res.data.data);
      });
  }, []);
  return (
    <div className="flex h-screen flex-col bg-primary">
      <Navbar />
      <div className="mx-6 mb-6 mt-4 grid gap-4 lg:grid-cols-4">
        {jobs.map((res) => (
          <Link
            key={res.id}
            to={`/jobs/${res.id}`}
            className="rounded-lg bg-slate-800 p-4 text-white shadow-lg"
          >
            <div className="flex justify-between">
              <img
                src={res.company_image_url}
                alt=""
                className="h-16 w-16 object-cover"
              />
              <span className="mb-6 rounded border p-2">{res.job_tenure}</span>
            </div>
            <div className="mt-2 grid justify-items-start">
              <span className="text-lg font-bold">{res.title}</span>
              <span className="text-sm">
                {res.company_name} - {res.company_city}
              </span>
              <span>
                {formattedRupiah.format(res.salary_min)} -{" "}
                {formattedRupiah.format(res.salary_max)}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default JobVacancy;
