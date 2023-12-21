import Title from "../Title/Title";
import image1 from '../../assets/images/dash2.jpg'
import image2 from '../../assets/images/managetask.jpg'
import image3 from '../../assets/images/taskdetail.jpg'
import image4 from '../../assets/images/updatetask.jpg'


const Services = () => {
  return (
    <div className=" bg-[url('https://i.ibb.co/YtRN50W/textured-1-3.jpg')] bg-cover">
      <Title heading="Check Out Some of the Exclusive Services"></Title>
      
      <div className="z-20">
        {/* row-1 */}
        <div className="flex flex-col lg:flex-row justify-evenly items-center ">
          {/* Card-1 */}
          <div className="flex flex-col my-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:-mt-4 cursor-pointer hover:animate-pulse">
            <div className="h-56 mt-4 mx-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src={image1}
                alt="card-image"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Manage Dashboard
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Sort tasks. Pick tool. Create sections. Input tasks with details. Highlight urgency. Set deadlines. Collaborate. Update progress. Review. Customize for efficiency.
              </p>
            </div>
          </div>
          {/* Card-2 */}
          <div className="flex flex-col my-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:-mt-4 cursor-pointer hover:animate-pulse">
            <div className="h-56 mt-4 mx-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src={image2}
                alt="card-image"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Manage Tasks
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Sort tasks by urgency and type. Choose a task tool. Create sections for categories. Input details, set deadlines, and prioritize. Collaborate and track progress. Review regularly for optimization.
              </p>
            </div>
          </div>

        

        </div>

        {/* row-2 */}
        <div className="flex flex-col lg:flex-row justify-evenly items-center ">
          {/* Card-1 */}
          <div className="flex flex-col my-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:-mt-4 cursor-pointer hover:animate-pulse">
            <div className="h-56 mt-4 mx-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src={image3}
                alt="card-image"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Show Task Details
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Display task specifics: include title, description, due date, priority, status. Outline subtasks if applicable. Update progress regularly for accurate tracking and efficient management.
              </p>
            </div>
          </div>
          {/* Card-2 */}
          <div className="flex flex-col my-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:-mt-4 cursor-pointer hover:animate-pulse">
            <div className="h-56 mt-4 mx-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src={image4}
                alt="card-image"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Manage Update Task
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Modify task details regularly: adjust deadlines, status, or descriptions as needed. Ensure accurate progress tracking by updating task developments consistently within the task management system.
              </p>
            </div>
          </div>

         
        </div>

        
      </div>
      {/* -------- */}
    </div>
  );
};

export default Services;