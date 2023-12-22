import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import AboutPage from "../Pages/AboutPage";
import BlogPage from "../Pages/BlogPage";
import ContactPage from "../Pages/ContactPage";
import Dashboard from "../Layouts/Dashboard";
import Navbar from "../Components/Navbar/Navbar";
import PrivateRoute from "./PrivateRoute";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import UserTask from "../Pages/Dashboard/UserTask/UserTask";
import ToDoList from "../Pages/Dashboard/TaskList/ToDoList";
import TaskUpdate from "../Pages/Dashboard/TaskList/TaskUpdate";

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },

      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: (
      <>
        <PrivateRoute>
          <Navbar></Navbar>
          <Dashboard></Dashboard>
        </PrivateRoute>
      </>
    ),
    children: [
        {
            path: '/dashboard',
            element: <UserHome></UserHome>
        },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "userTask",
        element: <UserTask></UserTask>,
      },
      {
        path: "taskList",
        element: <ToDoList></ToDoList>,
      },
      {
        path: "tasksUpdate/:id",
        element: <TaskUpdate></TaskUpdate>,
      },
    ],
  },
]);
