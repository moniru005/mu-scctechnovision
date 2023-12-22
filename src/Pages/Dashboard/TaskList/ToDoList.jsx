import { Helmet } from "react-helmet-async";
import "../TaskList/TaskList.css";
// import { FaTrashAlt } from "react-icons/fa";
// import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../../../Components/Loading/Loading";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const ToDoList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [selectedDate, setSelectedDate] = useState("");

  const axiosSecure = useAxiosSecure();

  //fetch Task
  const { data: tasks = [], isLoading: loading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tasks");
      return res.data;
    },
  });

  tasks.map((oneTask) => oneTask);

  //Search Filter
  const filteredTasks = tasks.filter((task) => {
    const query = searchQuery.toLowerCase();
    const search = task.taskTitle?.toLowerCase();
    const taskDescription = task.taskDescription?.toLowerCase();
    const taskDeadlines = task.taskDeadlines;
    const taskPriority = task.taskPriority;

    return (
      search?.includes(query) ||
      taskDeadlines.includes(query) ||
      taskPriority.includes(query) ||
      taskDescription.includes(query)
    );
  });

  // User Delete
  // const handleDeleteTask = (task) => {
  //     Swal.fire({
  //         title: `You want delete this Task?`,
  //         text: "You won't be able to revert this!",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Yes, delete it!",
  //       }).then((result) => {
  //         if (result.isConfirmed) {

  //             axiosSecure.delete(`/tasks/${task._id}`).then((res) => {
  //                 console.log(res.data);
  //                 if (res.data.deletedCount > 0) {
  //                   Swal.fire({
  //                     title: "Deleted!",
  //                     text: "Your data has been deleted.",
  //                     icon: "success",
  //                   });
  //                   refetch();
  //                 }
  //               });
  //         }
  //       });
  //   };

  //Loading
  if (loading) {
    <Loading></Loading>;
  }

  const [tasksFilter, setTasksFilter] = useState(filteredTasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = Array.from(tasksFilter);
    const [removed] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, removed);

    setTasksFilter(updatedTasks);
  };

  return (
    <div className="font-workSans w-full border">
      <Helmet> <title>ToDo List</title> </Helmet>
      <div className="full">
        <div className="border-b-2  mb-4 rounded-t-md py-4 bg-gradient-to-r from-black to-[#011354] w-full">
          <h3 className="text-3xl text-white flex flex-col text-center">
            <span className="">TO Do List</span>
          </h3>
          <p className="text-center text-white">
            <small>User should complete the To-Do-List</small>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-start justify-center items-center font-medium mb-6 w-full px-4">
          <h2 className="text-xl text-center mb-3 lg:mb-0 lg:text-start">
            All Task List: ({filteredTasks.length})
          </h2>
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

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start pt-6 lg:px-4">
              <Droppable  droppableId="tasksFilter">
                {(provided) => (
                  <div
                    className="flex flex-col lg:flex-row lg:flex-wrap gap-4 w-full lg:w-8/12 justify-center items-center lg:items-start lg:justify-start pb-4"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {tasksFilter.map((item, index) => (
                      <Draggable
                        key={item._id}
                        draggableId={item._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="w-60 bg-base-100 shadow rounded-lg"
                          >
                            <div className="px-4 py-2">
                              <h2 className="text-base font-medium">
                                {item.taskTitle}
                              </h2>
                              <p>
                                <span className="font-sm"></span>
                                {item.taskPriority} | {item.taskDeadlines}
                              </p>
                              <Link to={`/dashboard/tasksUpdate/${item._id}`}>
                                <FaEdit className="text-blue-950"></FaEdit>
                              </Link>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

            <div className="w-full lg:w-4/12 px-4 lg:px-0">
              <div>
              <Droppable droppableId="ongoing">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex justify-center items-center w-full h-32 border-black border rounded text-center mb-6"
                  >
                    <div className="border-2 rounded-full h-24 w-24 flex justify-center items-center text-sm">
                      <p>Drag for Ongoing</p>
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              </div>

              <Droppable droppableId="completed">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex justify-center items-center w-full h-32 border-black border rounded text-center mb-6"
                  >
                    <div className="border-2 rounded-full h-24 w-24 flex justify-center items-center text-sm">
                      <p>Drag for Completed </p>
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default ToDoList;
