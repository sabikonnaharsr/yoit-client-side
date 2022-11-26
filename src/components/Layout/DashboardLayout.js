import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
      
            <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
            <Outlet></Outlet>
            {/* <!-- Page content here --> */}
                
            </div> 
            <div className="drawer-side ">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80  text-base-content">
            {/*  <!-- Sidebar content here --> */}
                <li className='bg-slate-200'><Link>Users</Link></li>
                <li className='bg-slate-200'><Link>Add Product</Link></li>
                <li className='bg-slate-200'><Link>My Orders</Link></li>
                <li className='bg-slate-200'><Link>Wishlist</Link></li>
                </ul> 
            </div>
        </div>
        </div>
    );
};

export default DashboardLayout;