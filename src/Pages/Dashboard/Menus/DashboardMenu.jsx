import { Link, NavLink } from "react-router-dom";
// import { GrUserAdmin } from "react-icons/gr";
import { FaUserCheck, FaUsers } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
const DashboardMenu = () => {


  return (
    <>
      <Link to="/dashboard/userHome">
        <h2 className="text-start text-xl  border-b-2 border-light-blue-600">
          User Dashboard
        </h2>
      </Link>

      

      <NavLink to="/dashboard/userHome" className={`flex items-center gap-2`}>
        <GrUserAdmin className="text-[#031555] text-2xl"></GrUserAdmin>
        <button className="w-full">User Home</button>
      </NavLink>

      
      <NavLink
        to="/dashboard/userTask"
        className={`flex items-center gap-2`}
      >
        <FaUserCheck className="text-[#031555] text-2xl"></FaUserCheck>
        <button className="w-full">Add Task</button>
      </NavLink>

      <NavLink to="/dashboard/taskList" className={`flex items-center gap-2`}>
        <FaUsers className="text-[#031555] text-2xl"></FaUsers>
        <button className="w-full">To-do List</button>
      </NavLink>

     

      
    </>
  );
};

export default DashboardMenu;
