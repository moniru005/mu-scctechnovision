// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
// import useAuth from "../../../Hooks/useAuth";
import TaskList from "../TaskList/TaskList";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const UserTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const taskInfo = {
      taskTitle: data.title,
      taskDescription: data.description,
      taskPriority: data.priority,
      taskDeadlines: data.deadlines,
    };

    axiosPublic.post("/tasks", taskInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Your Task Successfully Saved`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    });
  };

  return (
    <div className="border rounded-t-md w-full mb-4 flex flex-col lg:flex-row font-workSans ">
      <Helmet>
        <title>User Task | EMS</title>
      </Helmet>

      <div className=" w-full ">
        <div className="border-b-2  mb-4 rounded-t-md py-4 bg-gradient-to-r from-black to-[#011354] w-full">
          <h3 className="text-3xl text-white flex flex-col text-center">
            <span className="">Add User Task</span>
          </h3>
          <p className="text-center text-white">
            <small>
              User should complete the task details using in this form
            </small>
          </p>
        </div>
        <div className=" rounded-lg p-6">
          {/* form */}
          <div className=" w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-2"
            >
              {/* Title and Description */}
              <div className={`flex flex-col lg:flex-row gap-2`}>
                {/* Title */}
                <div className="w-full lg:w-1/2 ">
                  <label className="">Title</label>
                  <input
                    {...register("title", { required: true, maxLength: 20 })}
                    className="w-full h-12 p-4 rounded-lg border-[#011354] bg-white border"
                    type="text"
                    name="title"
                    placeholder="Title"
                  />
                  {errors.title && (
                    <span className="text-red-100">Your Title is Required</span>
                  )}
                </div>
                {/* Description */}
                <div className="w-full lg:w-1/2 ">
                  <label className="">Description</label>
                  <textarea
                    {...register("description", {
                      required: true,
                      maxLength: 20,
                    })}
                    className="w-full h-12 px-4 py-3 rounded-lg border-[#011354] bg-white border"
                    name="description"
                    id=""
                    rows="10"
                    placeholder="Description"
                  ></textarea>
                  {errors.description && (
                    <span className="text-red-100">
                      Your Description is Required
                    </span>
                  )}
                </div>
              </div>

              {/* Priority and Deadlines */}
              <div className={`flex flex-col lg:flex-row gap-2`}>
                {/* Priority */}
                <div className={`w-full lg:w-1/2`}>
                  <label className="">Priority</label>
                  <select
                    {...register("priority", {
                      required: "Please select Priority",
                    })}
                    className="w-full h-12 p-2 rounded-lg border-[#011354] bg-white border"
                    name="tasksCategory"
                    id=""
                    defaultValue="default"
                  >
                    <option selected value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                  </select>
                  {errors.priority && (
                    <span className="text-red-100">
                      {errors.priority.message}
                    </span>
                  )}
                </div>
                {/* Deadlines */}
                <div className={`w-full lg:w-1/2`}>
                  <label className="">Deadlines</label>
                  <input
                    {...register("deadlines", {
                      required: "Please select Deadlines",
                    })}
                    className="w-full h-12 p-4 rounded-lg border-[#011354] bg-white border"
                    type="date"
                    name="deadlines"
                    placeholder="DeadLine"
                  />
                  {errors.deadlines && (
                    <span className="text-red-100">
                      {errors.deadlines.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full pt-6">
                <input
                  className="btn w-full  bg-[#011354] hover:bg-[#132a7a]  text-white"
                  type="submit"
                  value="Save Task"
                />
              </div>
            </form>
          </div>

          {/* Data Table */}
          <div className="lg:flex hidden mt-10">
            <hr className="border-b-2 border-b-light-blue-600" />
            <TaskList></TaskList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTask;
