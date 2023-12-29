import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { HiSearch } from "react-icons/hi";
function JobVacancy() {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

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

  function filteredData() {
    return jobs.filter((job) => {
      return job.title.toLowerCase().includes(query.toLowerCase());
    });
  }

  const result = filteredData();
  return (
    <div className="mx-8">
      <form>
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-gray-900 "
        >
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <HiSearch className="h-5 w-5" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-4 ps-10 text-sm text-gray-900 focus:border-violet-500 focus:outline-none focus:ring-2"
            placeholder="Search Jobs..."
            onChange={handleInputChange}
            required
          />
        </div>
      </form>
      <div className="mt-10 flex">
        <div className="mb-6 grid gap-4 lg:grid-cols-4 w-full">
          {result.map((res) => (
            <Link
              key={res.id}
              to={`/job-vacancy/${res.id}`}
              className="rounded-lg bg-slate-800 p-4 text-white shadow-lg"
            >
              <div className="flex justify-between">
                <img
                  src={res.company_image_url}
                  alt=""
                  className="h-16 w-16 object-cover"
                />
                <span className="mb-6 rounded border p-2">
                  {res.job_tenure}
                </span>
              </div>
              <div className="mt-2 grid justify-items-start">
                <span className="text-lg font-bold">{res.title} - {res.job_type}</span>
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
      </div>
    </div>
  );
}

export default JobVacancy;
