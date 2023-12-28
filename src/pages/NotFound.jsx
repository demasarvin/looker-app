import { Link } from "react-router-dom";
import Button from "../components/Button";

function NotFound() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto w-3/4 text-center text-white">
        <h1 className="mb-12 font-secondary text-6xl font-black text-violet-500 md:text-9xl">
          404
        </h1>
        <h3 className="mb-4 font-primary text-xl md:text-3xl">
          OOOPS ! PAGE NOT FOUND
        </h3>
        <p className="mb-6 font-primary">
          Sorry the page you are looking for does not exist
        </p>
        <Link to="/" className="flex justify-center w-fit mx-auto">
          <Button name={"Return Home"} />
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
