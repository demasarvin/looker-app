import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const ListJobsVacancy = () => {
  const tableHeaders = [
    "No",
    "Title",
    "Description",
    "Qualification",
    "Type",
    "Tenure",
    "Status",
    "Company",
    "Logo",
    "City",
    "Salary",
    "Action",
  ];
  const [listJobs, setListJobs] = useState([]);
  const formattedRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  const [fetchStatus, setFetchStatus] = useState(true);
  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setListJobs(res.data.data);
      });
  }, [fetchStatus, setFetchStatus]);
  const handleDelete = (id) => {
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then(() => {
        setFetchStatus((prevStatus) => !prevStatus);
      });
  };
  return (
    <div className="relative overflow-x-auto p-4">
      <table className="w-full text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index} className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listJobs.map((job, index) => (
            <tr key={index} className="border-b bg-white">
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{job.title}</td>
              <td className="px-6 py-4 ">
                <p className="line-clamp-2">{job.job_description}</p>
              </td>
              <td className="px-6 py-4">
                <p className="line-clamp-2">{job.job_qualification}</p>
              </td>
              <td className="px-6 py-4">{job.job_type}</td>
              <td className="px-6 py-4">{job.job_tenure}</td>
              <td className="px-6 py-4">{job.job_status}</td>
              <td className="px-6 py-4">{job.company_name}</td>
              <td className="h-4 w-4 px-6 py-4">
                <img src={job.company_image_url} alt="Company Logo" />
              </td>
              <td className="px-6 py-4">{job.company_city}</td>
              <td className="px-6 py-4">{`${formattedRupiah.format(
                job.salary_min,
              )}-
                ${formattedRupiah.format(job.salary_max)}`}</td>
              <td className="flex gap-2 px-6 py-4 font-bold">
                <Link to={`/dashboard/list-job-vacancy/edit/${job.id}`}>
                <button
                  type="button"
                  className="rounded-md bg-gray-300 p-2 text-black hover:bg-gray-500"
                >
                  Edit
                </button>
                </Link>
                <button
                  type="button"
                  onClick={() => handleDelete(job.id)}
                  className="rounded-md bg-red-700 p-2 text-white hover:bg-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListJobsVacancy;
