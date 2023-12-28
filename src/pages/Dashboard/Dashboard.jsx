import illustration from "../../assets/img/Robot.svg";
const Dashboard = () => {
  return (
    <div className="md:flex text-center w-full">
      <div className="flex md:w-1/2 items-center justify-center p-6 flex-col">
        <h1 className="font-primary text-xl font-bold md:text-3xl">
          Welcome to Dashboard
        </h1>
        <p className="font-secondary text-sm md:text-base">
          You can create, read, update, and delete data job here
        </p>
      </div>
      <img src={illustration} alt="Illustration" className="md:w-1/2" />
    </div>
  );
};

export default Dashboard;
