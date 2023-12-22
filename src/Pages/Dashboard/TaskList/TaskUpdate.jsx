import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const TaskUpdate = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();




  // get users from user api
  const { data: tasks = [], refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tasks");
      return res.data;
    },
  });

  //filtered to match with user id
  const {id} = useParams();
  const findTask = tasks.find(task => task._id === id);
//   console.log(findUser);

  const onSubmit = (data) => {
   
        const taskInfo = {
            taskTitle: data.title,
            taskDescription: data.description,
            taskPriority: data.priority,
            taskDeadlines: data.deadlines,
            
          };
        console.log(taskInfo);

          axiosPublic.patch(`/tasks/${findTask._id}`, taskInfo)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
                refetch();
              Swal.fire({
                position: "center",
                icon: "success",
                title: `${data.title} Successfully Updated`,
                showConfirmButton: false,
                timer: 2500,
              });
              reset();
              navigate("/dashboard/taskList");
            }
          });
 
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Update Employee | EMS</title>
      </Helmet>
      <div className=" mb-4 flex flex-col lg:flex-row justify-center items-center font-workSans w-full">
        <div className=" rounded-lg bg-[#e7eff5] p-6">
          <div className="mb-8">
            <h2 className="text-2xl text-center font-semibold text-balck">
              Update Task
            </h2>
            <p className="text-center">
              <small>Update the Task details using in this form</small>
            </p>
          </div>
          {/* form */}
          <div className="w-[800px]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-2"
            >
              {/* Title & Description */}
              <div className={`flex flex-col lg:flex-row gap-2`}>
                {/* Title */}
                <div className="w-full lg:w-1/2 ">
                  <input
                    {...register("title", { required: true, maxLength: 20 })}
                    className="h-12 p-2 rounded border border-[#011354] w-full"
                    type="text"
                    name="title"
                    placeholder="Name"
                    defaultValue={findTask?.taskTitle}
                  />
                  {errors.name && (
                    <span className="text-red-100">
                      Your Task Title is Required
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="w-full lg:w-1/2 ">
                  <textarea
                    {...register("description", {
                      required: true,
                      maxLength: 20,
                    })}
                    className="h-12 p-2 rounded border border-[#011354] w-full"
                    type="text"
                    placeholder="Description"
                    rows="2"
                    defaultValue={findTask?.taskDescription}
                  ></textarea>
                  {errors.name && (
                    <span className="text-red-100">
                      Your Task Description is Required
                    </span>
                  )}
                </div>
              </div>

              {/* Priority and Date */}
              <div className={`flex flex-col lg:flex-row gap-2`}>
                {/* Priority */}
                <div className={`w-full lg:w-1/2`}>
                    <select 
                        {...register("priority", { required: 'Please select Priority' })}
                        defaultValue={findTask?.taskPriority}
                        className="w-full h-12 p-2  rounded-lg border-[#011354] bg-white border" name="priority" id="">
                        <option disabled>Select Priority</option>
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="High">High</option>
                    </select>
                    {errors.priority && (<span className="text-red-100">
                    {errors.priority.message}
                    </span>
                    )}
                </div>
                {/* Deadlines */}
                <div className={`w-full lg:w-1/2`}>
                  <input
                    {...register("deadlines", { required: true, maxLength: 20 })}
                    className="h-12 p-2 rounded border border-[#011354] w-full"
                    type="date"
                    placeholder="Deadlines"
                    defaultValue={findTask?.taskDeadlines}
                  />
                  {errors.name && (
                    <span className="text-red-100">
                      Your Deadlines is Required
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full pt-6">
                <input
                  className="p-2 border border-white bg-[#011354] hover:bg-[#15308fe8] text-white rounded cursor-pointer text-base font-medium w-full"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskUpdate;
