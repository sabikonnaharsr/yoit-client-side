import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <header aria-label="Site Header" className="border-b border-gray-100">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="dropdown">
              <label tabindex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="1"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/myReview">My Product</Link>
                </li>
                <li>
                  <Link to="/myReview">Add Product</Link>
                </li>
                <li>
                  <Link to="/appointments">Appointments</Link>
                </li>
                <li>
                  <Link to="/contact">Dashboard</Link>
                </li>
              </ul>
            </div>

            {/* dropdown end*/}
            <form className="mb-0 hidden lg:flex ">
              <div className="relative rounded-full">
                <input
                  className="h-10 rounded-lg border-gray-200 pr-10 text-sm placeholder-gray-300 focus:z-10"
                  placeholder="Search..."
                  type="text"
                />

                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 mr-px rounded-r-lg rounded-full p-2 text-gray-600"
                >
                  <span className="sr-only ml-3">Submit Search</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    view
                    box="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <nav
              aria-label="Site Nav"
              className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
            >
              <Link
                to="/"
                className="block h-16 font-bold text-6xl border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-pink-600"
              >
                <span className="text-pink-600 text-5xl">Y</span>oit
              </Link>
              <Link
                to="/"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-pink-600"
              >
                Home
              </Link>

              {/* <Link
                to="/addProduct"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-pink-600"
              >
                Add Product
              </Link>

              <Link
                to="/myOrders"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-pink-600"
              >
                My Orders
              </Link>

              <Link
                to="/wishlist"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-pink-600"
              >
                Wishlist
              </Link> */}

              <Link
                to="/blogs"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-pink-600"
              >
                Blogs
              </Link>

              <div className="ml-2 lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500 items-center ">
                <div className="flex items-center divide-x divide-gray-100 border-x border-gray-100">
                  {/* list start*/}
                  <div className="hidden items-center lg:text-xs lg:font-bold gap-4 lg:flex">
                    {/* conditional rendering */}
                    {user?.uid ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-pink-600"
                        >
                          Dashboard
                        </Link>
                        <Link
                         
                         to="/login"
                          onClick={handleLogOut}
                          className="rounded-full btn btn-ghost lg:text-xs lg:font-bold bg-slate-700 hover:text-pink-600 px-5 py-2 text-sm  lg:tracking-wide lg:text-gray-200"
                        >
                          Signout
                        </Link>
                      </>
                    ) : (
                      <Link
                        to="/login"
                        className="rounded-full btn btn-ghost lg:text-xs lg:font-bold bg-slate-700 hover:text-pink-600 px-5 py-2 text-sm  lg:tracking-wide lg:text-gray-200"
                      >
                        Login
                      </Link>
                    )}
                   
                    {/* conditional rendering end */}
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* sidebar */}
          <label
            htmlFor="dashboard-drawer"
            tabindex="2"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* sidebar end */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
