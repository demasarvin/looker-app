import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [jobs, setJobs] = useState([]);
  const { id } = useParams();
  const formattedRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
      .then((res) => {
        setJobs(res.data);
      });
  }, [id]);
  return (
    <div className="mx-8 my-10 flex min-h-screen justify-center">
      {jobs !== null && (
        <div className="flex flex-col text-white lg:w-1/2">
          <div className="flex flex-row justify-between">
            <div className="w-1/2">
              <img
                src={jobs.company_image_url}
                alt={jobs.company_name}
                className="h-32 w-32 object-cover lg:h-64 lg:w-64"
              />
            </div>
            <div className="w-1/2">
              <p className="text-2xl font-bold md:text-4xl text-balance">
                {jobs.title} ({jobs.job_tenure})
              </p>
              <p className="text-lg">
                {jobs.company_name} - {jobs.job_type}
              </p>
              <table className="mt-4">
                <tbody>
                  <tr>
                    <td className="font-bold flex items-start">Salary</td>
                    <td className="text-balance">
                      : {formattedRupiah.format(jobs.salary_min)} -{" "}
                      {formattedRupiah.format(jobs.salary_max)}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">City</td>
                    <td>: {jobs.company_city}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Status</td>
                    <td>
                      :{" "}
                      {jobs.job_status === 1 ? (
                        <span className="text-green-500">Open Hiring</span>
                      ) : (
                        <span className="text-red-500">Closed Hiring</span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <ol className="mt-6">
            <li className="text-xl font-bold">Qualification :</li>
            <li>{jobs.job_qualification}</li>
          </ol>
          <ol className="mt-6">
            <li className="text-xl font-bold">Description :</li>
            <li>{jobs.job_description}</li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default Detail;
