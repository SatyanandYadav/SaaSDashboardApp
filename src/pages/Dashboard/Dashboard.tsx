import EcommerceDashboard from "../../components/Ecommerce/EcommerceDashboard";
import ProjectionsVsActualsChart from "../../components/ProjectionsVsActualsChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <h2 id="ecommerce-section" className="col-span-2 mb-4 text-xl font-bold">
        eCommerce
      </h2>
      <div className="flex w-full gap-6">
        <div className="w-1/2">
          <EcommerceDashboard />
        </div>
        <div className="w-1/2">
          <ProjectionsVsActualsChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
