import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login/Login";
import SignUp from "../../Login/SignUp/SignUp";
import Blogs from "../../Pages/Blogs/Blogs";
import AllCategories from "../../Pages/CategorySection/AllCategories/AllCategories";
import CategoryItemDetailsPage from "../../Pages/CategorySection/CategoryItemDetailsPage/CategoryItemDetailsPage";
import CategoryPage from "../../Pages/CategorySection/CategoryPage/CategoryPage";
import Dashboard from "../../Pages/DashboardSection/Dashboard/Dashboard";
import MyAppointment from "../../Pages/DashboardSection/MyAppointment/MyAppointment";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/HomeSection/Home/Home";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: '/allCategories',
        // loader: ()=> fetch('http://localhost:5000/productCollection'),
        element: <AllCategories></AllCategories>
      },
      {
        path: '/categoryPage/:id',
        element: <CategoryPage></CategoryPage>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      },
      {
        path: '/productDetails/:id',
        element: <CategoryItemDetailsPage></CategoryItemDetailsPage>,
        loader: ({params}) => fetch(`http://localhost:5000/productDetails/${params.id}`)
      }
    ],
  },
  {
    path: "/dashboard",
    element:
      <ProtectedRoutes>
        <DashboardLayout></DashboardLayout>
      </ProtectedRoutes>,
      children: [
        {
          path: '/dashboard',
          element: <MyAppointment></MyAppointment>
        }
      ]
    
  },
  
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  
]);
