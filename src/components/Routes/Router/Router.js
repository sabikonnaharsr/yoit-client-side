import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login/Login";
import SignUp from "../../Login/SignUp/SignUp";
import Appointment from "../../Pages/AppointmentSection/Appointment/Appointment";
import Blogs from "../../Pages/Blogs/Blogs";
import AllCategories from "../../Pages/CategorySection/AllCategories/AllCategories";
import BabiesClothDetail from "../../Pages/CategorySection/BabieClothDetail/BabiesClothDetail";
import CategoryItemDetailsPage from "../../Pages/CategorySection/CategoryItemDetailsPage/CategoryItemDetailsPage";
import CategoryPage from "../../Pages/CategorySection/CategoryPage/CategoryPage";
import LadiesClotheDetails from "../../Pages/CategorySection/LadiesClotheDetails/LadiesClotheDetails";
import LadiesClothes from "../../Pages/CategorySection/LadiesClothes/LadiesClothes";
import LadiesClothesDetail from "../../Pages/CategorySection/LadiesClothesDetail/LadiesClothesDetail";
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
