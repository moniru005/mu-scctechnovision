import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import "../Layouts/Dashboard.css";
import DashboardMenu from "../Pages/Dashboard/Menus/DashboardMenu";



const Dashboard = () => {


  return (
    <div className="flex flex-col lg:flex-row">
      <Helmet>
        <title>Dashboard | EMS</title>
      </Helmet>

      {/* Dashboard Sidebar */}
      <div className="lg:w-3/12 w-full ">
        <div className="text-md font-workSans flex flex-col lg:flex-row gap-2 p-4 ">
          <ul className="sidebar flex flex-col gap-2 font-medium w-full ">
         
          <DashboardMenu></DashboardMenu>
          
          </ul>
        </div>
      </div>

      {/* Dashboard Contents */}
      <div className="lg:w-9/12 w-full flex p-4 bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
