import React from "react";
import { Link } from "react-router-dom";

const AllCategory = ({ category }) => {
  console.log(category);
  const { name, img, price, _id } = category;

  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 shadow-md dark:bg-gray-800 ">
        <Link to="/">
          <img className="" src={img} alt="" />
        </Link>
        <div className="p-5">
          <a href="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p>{price}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {/* Here are {description} */}
          </p>
          <Link
            to={`/categoryPage/${_id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:hover:bg-pink-700 dark:focus:ring-blue-800"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6  6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllCategory;
