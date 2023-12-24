import Button from "../components/Button";
import Navbar from "../components/NavBar";
import Amazone from "../assets/img/Amazon.svg";
import HubSpot from "../assets/img/HubSpot.svg";
import OpenTable from "../assets/img/OpenTable.svg";
import Shopify from "../assets/img/Shopify.svg";
import Slack from "../assets/img/Slack.svg";
import People from "../assets/img/People.svg";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <section className="py-16 md:py-24">
        <div className="mx-auto w-3/4 text-center text-white">
          <h1 className="font-secondary mb-10 text-3xl font-black md:text-8xl">
            One Step Closer To Your Dream Job
          </h1>
          <p className="font-primary mb-8 text-sm capitalize md:text-lg">
            let us help you find a job that suits you the best!
          </p>
          <div className="mb-20 flex justify-center">
            <Button name="Get Started" />
          </div>
          <ul className="flex justify-center gap-10">
            <li>
              <p className="font-secondary text-xl font-black md:text-3xl">
                20M+
              </p>
              <p className="font-primary text-lg">Users</p>
            </li>
            <li>
              <p className="font-secondary text-xl font-black md:text-3xl">
                500K+
              </p>
              <p className="font-primary text-lg">Jobs</p>
            </li>
            <li>
              <p className="font-secondary text-xl font-black md:text-3xl">
                100+
              </p>
              <p className="font-primary text-lg">Partners</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-violet-500 px-4 py-12 font-black">
        <h3 className="mb-8 text-center text-2xl capitalize text-white md:text-4xl">
          Work with exciting 100+ <span className="text-black">companies</span>{" "}
          in the world
        </h3>
        <ul className="font-secondary flex flex-wrap items-center justify-center gap-8 text-lg text-white md:text-2xl">
          <li className="flex items-center">
            <img src={Amazone} alt="Amazone" />
            <p className="ml-2">Amazone</p>
          </li>
          <li>
            <img src={HubSpot} alt="HubSpot" />
          </li>
          <li className="flex items-center">
            <img src={OpenTable} alt="OpenTable" />

            <p className="ml-2">Open Table</p>
          </li>
          <li className="flex items-center">
            <img src={Shopify} alt="Shopify" />

            <p className="ml-2">Shopify</p>
          </li>
          <li className="flex items-center">
            <img src={Slack} alt="Slack" />

            <p className="ml-2">Slack</p>
          </li>
        </ul>
      </section>
      <section className="mx-auto mt-20 h-full w-full md:mt-32 md:flex">
        <div className="mb-16 flex flex-col justify-center text-white md:mb-0 md:w-1/2">
          <h3 className="font-secondary mx-auto w-3/4 text-2xl capitalize md:text-4xl">
            So Many People are <span className="text-violet-500">engaged</span>{" "}
            all over the world
          </h3>
          <p className="font-primary mx-auto mt-8 w-3/4">
            Et in sapien enim congue interdum pulvinar non sed. Ac augue netus
            tellus semper.
          </p>
          <div className="mx-auto mt-8 w-3/4">
            <Button name={"Post a Job"} />
          </div>
        </div>
        <div className="flex justify-center px-8 md:w-1/2">
          <img src={People} alt="People" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
