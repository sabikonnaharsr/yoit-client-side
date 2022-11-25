import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PrimaryButton from '../../../PrimaryButton/PrimaryButton';

const CategoryItemDetailsPage = () => {
   const detailsProduct = useLoaderData();

   const {name, img, description, price, ratings} = detailsProduct;


    return (
        <div>
           <h1 className='text-6xl text-center text-cyan-500 mt-7 font-GreatVibes'>Welcome to our men's Collection...</h1>
           <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
             <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                   <div className="max-w-xl mb-6">
                     <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                     {name}
                     <br className="hidden md:block" />
                     {price}
                     </h2>
                     <span className="inline-block font-semibold text-deep-purple-accent-400">
                        Ratings: {ratings}
                     </span>
                     <p className="text-base text-gray-700 md:text-lg">
                    {description}
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                    src={img}
                    alt=""
                  />
                </div>
            </div>
          <Link to="" className='flex gap-4'>
          <PrimaryButton>Wishlist</PrimaryButton>
          <PrimaryButton>Report to admin</PrimaryButton>
          </Link>
        </div>
     </div>
    );
};

export default CategoryItemDetailsPage;