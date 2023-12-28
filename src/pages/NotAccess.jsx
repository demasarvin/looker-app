import { Link } from "react-router-dom";
import Button from "../components/Button";

const NotAccess = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto w-3/4 text-center text-white">
        <h1 className="mb-12 font-secondary text-6xl font-black text-violet-500 md:text-9xl">
          OOOPS !
        </h1>
        <h3 className="mb-4 font-primary text-xl md:text-3xl">
          Only logged in accounts can access the dashboard
        </h3>
        <p className="mb-6 font-primary">Please Login First</p>
        <Link to="/login" className="mx-auto flex w-fit justify-center">
          <Button name={"Go to Login"} />
        </Link>
      </div>
    </div>
  );
};

export default NotAccess;
