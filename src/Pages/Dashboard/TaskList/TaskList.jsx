import { Helmet } from "react-helmet-async";
import "../TaskList/TaskList.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../../../Components/Loading/Loading";
import { Link } from "react-router-dom";


const TaskList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [selectedDate, setSelectedDate] = useState("");

  const axiosSecure = useAxiosSecure();
 

  //fetch Task
  const { data: tasks = [], isLoading: loading, refetch, } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tasks");
      return res.data;
    },
  });


  //Search Filter
  const filteredTasks = tasks.filter((task) => {
    const query = searchQuery.toLowerCase();
    const search = task.taskTitle?.toLowerCase();
    const taskDescription = task.taskDescription?.toLowerCase();
    const taskDeadlines = task.taskDeadlines;
    const taskPriority = task.taskPriority;

    return search?.includes(query) || 
    taskDeadlines.includes(query) || taskPriority.includes(query) || taskDescription.includes(query);
  });


// User Delete   
const handleDeleteTask = (task) => {
    Swal.fire({
        title: `You want delete this Task?`,
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
            
            axiosSecure.delete(`/tasks/${task._id}`).then((res) => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your data has been deleted.",
                    icon: "success",
                  });
                  refetch();
                }
              });
        }
      });
  };

  //Loading
  if(loading){
    <Loading></Loading>
  }

  
  
  return (
    <div className="font-workSans w-full ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex justify-between items-center font-medium mb-6 w-full">
          <h2 className="text-xl text-start w-full">All Task List: ({filteredTasks.length})</h2>
          <div className=" lg:ml-8 flex gap-4 ">
            <input
              className="p-2 border border-[#8e8e8e] font-workSans font-medium rounded-lg"
              type="text"
              placeholder="Search any key"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* <input
            className="p-2 border border-[#0064A5]"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            /> */}
          </div>
        </div>
        <table id="" className="table table-auto w-full border">
          <thead className="border">
            <tr className="user-heading font-medium">
              <th className={`border`}>SL</th>
              <th className="w-56 border">Task Title</th>
              <th className="border">Task Description</th>
              <th className="border">Task Priority</th>
              <th className="border">Task Deadlines</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks?.map((task, index) => (
              <tr key={task._id} className="user-body text-center">
                <td className={`border`}>{index + 1}</td>
                <td className="border capitalize">{task.taskTitle}</td>
                <td className="border ">{task.taskDescription}</td>
                <td className="border ">{task.taskPriority}</td>
                <td className="border ">{task.taskDeadlines}</td>
                
                
                
                <td className={`border flex gap-2`}>
                  <button
                    onClick={() => handleDeleteTask(task)}
                    className="bg-red-600 p-2 rounded"
                  >
                    <FaTrashAlt className="text-white"></FaTrashAlt>
                  </button>

                  <Link to={`/dashboard/tasksUpdate/${task._id}`}>
                  <button
                    className="bg-blue-950 p-2 rounded"
                  >
                    <FaEdit className="text-white"></FaEdit>
                  </button>
                  </Link>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Helmet></Helmet>
    </div>
  );
};

export default TaskList;
