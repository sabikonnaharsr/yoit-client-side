import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/UseAdmin/UseAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {

  const { user } = useContext(AuthContext);
    const [userType] = useAdmin(user?.email)
    console.log(userType)
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
          {/* <!-- Page content here --> */}
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            {/*  <!-- Sidebar content here --> */}
            <li className="bg-slate-200 text-sm font-bold uppercase">
              <Link>Users</Link>
            </li>
            <li className="bg-slate-200 text-sm font-bold uppercase">
              <Link to="/dashboard/addProduct">Add Product</Link>
            </li>
            <li className="bg-slate-200 text-sm font-bold uppercase">
              <Link to='/dashboard/myproduct'>My Products</Link>
            </li>
            <li  className="bg-slate-200 text-sm font-bold uppercase">
              <Link to="/dashboard/wishlist">Wishlist</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
