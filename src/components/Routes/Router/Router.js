import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login/Login";
import SignUp from "../../Login/SignUp/SignUp";
import Appointment from "../../Pages/AppointmentSection/Appointment/Appointment";
import Blogs from "../../Pages/Blogs/Blogs";
import BabiesClothDetail from "../../Pages/CategorySection/BabieClothDetail/BabiesClothDetail";
import LadiesClothes from "../../Pages/CategorySection/LadiesClothes/LadiesClothes";
import MensClothDetail from "../../Pages/CategorySection/MensClothDetail/MensClothDetail";
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
        path: '/appointment',
        element: <Appointment></Appointment>
      },
      {
        path: '/ladiesClothes',
        element: <LadiesClothes></LadiesClothes>
      },
      {
        path: '/babiesClothDetail',
        element: <BabiesClothDetail></BabiesClothDetail>
      },
      {
        path: '/mensClothDetail',
        element: <MensClothDetail></MensClothDetail>
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
