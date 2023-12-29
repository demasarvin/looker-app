import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
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
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setListJobs(res.data.data);
      });
  }, [fetchStatus, setFetchStatus]);
  const handleDelete = (id) => {
    setSelectedJobId(id);
    setShowModal(true);
  };
  const confirmDelete = () => {
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${selectedJobId}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then(() => {
        setFetchStatus((prevStatus) => !prevStatus);
        setShowModal(false);
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
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="relative flex flex-col justify-center p-6 ">
                  <div className="flex justify-center">
                    <HiOutlineExclamationCircle className="text-7xl text-red-500" />
                  </div>
                  <p className="text-center text-lg text-gray-500">
                    Are you sure you want to delete data?
                  </p>
                </div>
                <div className="flex items-center justify-end gap-2 rounded-b border-t border-solid p-4">
                  <button
                    className="mb-1 mr-1 rounded-md bg-red-500 px-8 py-2 text-sm font-medium text-white hover:bg-red-700"
                    type="button"
                    onClick={() => confirmDelete()}
                  >
                    Delete
                  </button>
                  <button
                    className="mb-1 mr-1 rounded-md bg-gray-200 px-8 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </div>
  );
};

export default ListJobsVacancy;
