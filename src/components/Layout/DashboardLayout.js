import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/UseAdmin/UseAdmin";
import UseTitle from "../Hooks/UseTitle";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const DashboardLayout = () => {
  UseTitle('Dashboard')
  const { user } = useContext(AuthContext);
  const [userType] = useAdmin(user?.email)


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
                     {/*<!-- Page content here --> */}
                   </div>
                     <div className="drawer-side ">
                     <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                      {/*<!-- Sidebar content here --> */}
                    
                     <li className="bg-slate-200 text-sm font-bold uppercase">
                       <Link to="/dashboard/addProduct">Add Product</Link>
                     </li>
                     <li className="bg-slate-200 text-sm font-bold uppercase">
                      <Link to='/dashboard/myproduct'>My Products</Link>
                    </li>
                    <li className="bg-slate-200 text-sm font-bold uppercase">
                   <Link to="/dashboard/wishlist">Wishlist</Link>
                </li>
                    <li className="bg-slate-200 text-sm font-bold uppercase">
                   <Link to="/dashboard/allSeller">All Seller</Link>
                </li>
                    <li className="bg-slate-200 text-sm font-bold uppercase">
                   <Link to="/dashboard/allBuyer">All Buyer</Link>
                </li>
                    <li className="bg-slate-200 text-sm font-bold uppercase">
                   <Link to="/dashboard/allUsers">All Users</Link>
                </li>
                <li className="bg-slate-200 text-sm font-bold uppercase">
                   <Link to="/dashboard/reportedProduct">Reported Product</Link>
                </li>
                <li className="bg-slate-200 text-sm font-bold uppercase">
                   <Link to="/dashboard/myOrder">My Orders</Link>
                </li>
            
            </ul>
          </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
