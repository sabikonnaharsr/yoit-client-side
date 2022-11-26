import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ProductGallery = () => {


  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight uppercase text-gray-600 sm:text-4xl sm:leading-none">
                Let us handle
                <br className="hidden md:block uppercase" />
                your next{" "}
                <span className="inline-block uppercase text-deep-purple-accent-400">
                  destination
                </span>
              </h2>
              <p className="text-base uppercase text-gray-700 md:text-lg">
                Clothing serves many purposes: it can serve as protection from
                the elements, rough surfaces, sharp stones, rash-causing plants,
                insect bites,
              </p>
            </div>
            <div>
              <Link
                to={`/productDetails/`}
                aria-label=""
                className="inline-flex uppercase items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://img.freepik.com/free-photo/stylish-little-girl-child-girl-casual-with-skateboard-yellow-wall_231208-11396.jpg?size=626&ext=jpg&ga=GA1.2.1510053171.1664396538&semt=sph"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://img.freepik.com/free-photo/portrait-cute-little-kid-boy-stylish-jeans-clothes-looking-camera-against-white-studio-wall-kids-fashion-concept_155003-21550.jpg?size=626&ext=jpg&ga=GA1.2.1510053171.1664396538&semt=sph"
                alt=""
              />
            </div>
            <div className="px-3">
              <PhotoProvider>
                <PhotoView src="https://img.freepik.com/free-photo/little-beautiful-smiling-girl-with-funny-face-striped-yellow-dress-posing-blue-background-studio_114579-92649.jpg?w=1060&t=st=1669288267~exp=1669288867~hmac=9acfc94659d4cc3a8e909e9b11d17258fc2a0c3a4499bcbe76afd05f0279c942">
                  <img
                    className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                    src="https://img.freepik.com/free-photo/little-beautiful-smiling-girl-with-funny-face-striped-yellow-dress-posing-blue-background-studio_114579-92649.jpg?w=1060&t=st=1669288267~exp=1669288867~hmac=9acfc94659d4cc3a8e909e9b11d17258fc2a0c3a4499bcbe76afd05f0279c942"
                    alt=""
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
