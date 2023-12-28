const Profile = () => {
  let userDetails = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="rounded-md border border-gray-400 p-8">
        <div className="mb-4 flex justify-center">
          <img
            src={userDetails.image_url}
            alt="Profile Image"
            className="h-32 w-32 rounded-full border border-gray-500 text-center"
          />
        </div>
        <table>
          <tbody>
            <tr>
              <td className="font-bold">Name</td>
              <td>:</td>
              <td>
                <p className="font-bold">{userDetails.name}</p>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td>
                <p>{userDetails.email}</p>
              </td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>:</td>
              <td>
                <p>{userDetails.created_at}</p>
              </td>
            </tr>
            <tr>
              <td>Updated At</td>
              <td>:</td>
              <td>
                <p>{userDetails.updated_at}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
