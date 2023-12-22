
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useTask from "../../../Hooks/useTasks";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const UserHome = () => {

    

  const { user } = useAuth(); 
  const axiosSecure = useAxiosSecure();
  const [tasks] = useTask();

  const { data: stats = {} } = useQuery({
    queryKey: ["user-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user-stats");
      return res.data;
    },
  });

  // custom shape pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = tasks.map((data) => {
    return { name: data.taskPriority, value: parseInt(data.taskTitle) };
  });


  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-center gap-4">
      <div className="">
        {
          // user&& <img className="rounded-full w-16 h-16 ml-12" src={user.photoURL} alt="" /> 
          user&& <img className="rounded-full w-16 h-16 ml-12" src={user.photoURL} alt="" /> 
        }
      </div>
      <h2 className="text-xl text-center lg:text-start lg:text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      </div>

      <div>
        <div className="grid grid-cols-2 lg:grid-cols-3  gap-1  mt-10 font-workSans">
          <div className="w-48 h-24 pt-24px pt-2 gap-2 text-center bg-gradient-to-r from-white to-green-500 rounded-lg">
            <div className="p-0  text-xl font-semibold text-gray-800">
              Users
            </div>
            <div className="text-4xl pt-2 font-semibold ">{stats?.users}</div>
          </div>

          <div className="w-48 h-24 pt-24px pt-2  gap-2 text-center bg-gradient-to-r from-gray-100 to-purple-500 rounded-lg">
            <div className=" text-xl font-semibold text-gray-800">Tasks</div>
            <div className="text-4xl pt-2 font-semibold">
            {stats?.totalTask}
            </div>
          </div>

          <div className="w-48 h-24 pt-24px pt-2  gap-2 text-center bg-gradient-to-r from-gray-100 to-deep-orange-300 rounded-lg">
            <div className=" text-xl font-semibold text-gray-800">
              Reviews
            </div>
            <div className="text-4xl pt-2 font-semibold">
              {stats?.reviews}
            </div>
          </div>

        
        </div>
      </div>
      
      {/* BarChart and Piechart */}
      <div className="flex">
        {/* BarChart */}
        <div className="mt-12">
          <BarChart
            width={500}
            height={300}
            data={tasks}
            margin={{
              top: 20,
              right: 50,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="taskDeadlines" />
            <YAxis />
            <Bar dataKey="taskPriority" fill="#8884d8" label={{ position: "top" }}>
              {tasks?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        
        {/* PieChart */}
        <div className="w-1/2">
          <PieChart width={300} height={285}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
   
      
    </div>
  );
};

export default UserHome;
