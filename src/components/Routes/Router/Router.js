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
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
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
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
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
        path:'/payments/:id',
        element:<Payment/>,
        loader: ({params}) => fetch(`http://localhost:5000/payment/bookings/${params.id}`)
       }
    ],
  },
  {
    path: "/dashboard",
    element: (
  
        <DashboardLayout></DashboardLayout>
  
    ),
    children: [
      {
        path: "/dashboard/wishlist",
        element: <BuyerRoute><Wishlist></Wishlist></BuyerRoute>,
      },
      {
        path: "/dashboard/addProduct",
        element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
      },
      {
        path: "/dashboard/myproduct",
        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
      },
      
      {
        path: '/dashboard/allSeller',
        element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
      },
      {
        path: "/dashboard/allBuyer",
        element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
      },
      {
        path: "/dashboard/allUsers",
        element: <AdminRoute><AllUser></AllUser></AdminRoute>
      },
      {
        path: '/dashboard/reportedProduct',
        element: <AdminRoute> <ReportedItem></ReportedItem></AdminRoute>
      },
      {
        path: '/dashboard/myOrder',
        element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
      },
      {

      }
      
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
