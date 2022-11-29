import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login/Login";
import SignUp from "../../Login/SignUp/SignUp";
import Blogs from "../../Pages/Blogs/Blogs";
import AllCategories from "../../Pages/CategorySection/AllCategories/AllCategories";
import CategoryItemDetailsPage from "../../Pages/CategorySection/CategoryItemDetailsPage/CategoryItemDetailsPage";
import CategoryPage from "../../Pages/CategorySection/CategoryPage/CategoryPage";
// import Dashboard from "../../Pages/DashboardSection/Dashboard/Dashboard";
import Wishlist from "../../Pages/DashboardSection/Wishlist/Wishlist";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/HomeSection/Home/Home";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";

import AddProduct from "../../Pages/DashboardSection/AddProduct/AddProduct";
import Payment from "../../Pages/DashboardSection/Payment/Payment";
import MyProducts from "../../Pages/ProductSection/MyProducts/MyProducts";
import AllSeller from "../../Pages/AdminSection/AllSeller/AllSeller";
import AllBuyer from "../../Pages/AdminSection/AllBuyer/AllBuyer";
import AllUser from "../../Pages/AdminSection/AllUser/AllUser";
import ReportedItem from "../../Pages/AdminSection/ReportedItem/ReportedItem";
import MyProduct from "../../Pages/ProductSection/MyProduct/MyProduct";
import MyOrders from "../../Pages/DashboardSection/MyOrders/MyOrders";
// import AdvertisedItem from "../../Pages/DashboardSection/AdveritsedItem/AdvertisedItem";
// import AddProduct from "../../Pages/DashboardSection/AddProduct/AddProduct";


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
        path: "/allCategories",
        element: <AllCategories></AllCategories>,
      },
      {
        path: "/categoryPage/:id",
        element: <CategoryPage></CategoryPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      {
        path: "/productDetails/:id",
        element: <CategoryItemDetailsPage/>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/productDetails/${params.id}`),
      },
     
      {
        path: '/myOrders',
        element: <MyOrders></MyOrders>
      } ,
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path:'/payment/:id',
        element:<Payment/>,
        loader: ({params}) => fetch(`http://localhost:5000/productDetails/${params.id}`)
       }
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <DashboardLayout></DashboardLayout>
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/dashboard/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/dashboard/myproduct",
        element: <MyProducts></MyProducts>
      },
      
      {
        path: '/dashboard/allSeller',
        element: <AllSeller></AllSeller>
      },
      {
        path: "/dashboard/allBuyer",
        element: <AllBuyer></AllBuyer>
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUser></AllUser>
      },
      {
        path: '/dashboard/reportedProduct',
        element: <ReportedItem></ReportedItem>
      },
      {
        path: '/dashboard/myOrder',
        element: <MyOrders></MyOrders>
      }
      
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
