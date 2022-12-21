import React from 'react';
import { useLoaderData } from 'react-router-dom';

import CategoryPageItem from '../CategoryPageItem/CategoryPageItem';

const CategoryPage = () => {

 
    const categoryData = useLoaderData();
    console.log(categoryData)

    return (
        <div>
           <div className='text-center mt-10 mb-8 font-semibold'>
             <h1 className='text-center hover:text-slate-600 text-pink-500 text-3xl mb-3 font-bold'>FROM FAST FASHION TO LUXURY BRAND</h1>
              <p className='hover:text-pink-600'>WITH A POWERFUL SEARCH ENGINE YOU CAN DISCOVER ALMOST EVERY BRAND ON THE EARTH, <br /> FROM 'JARA TO GUCCI. WE EMBRACE ENJOY A WIDE RANGE OF STYLE AND BRAND.</p>
           </div>
           {/* grid lg:grid-cols-3 md:grid-cols-2 gap-4  */}
           <div className='justify-between lg:px-20 px-3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mb-6'>           
                {
                  categoryData.length > 0 && 
                  categoryData.map(product => ( 
                  <CategoryPageItem 
                  key={product._id}
                  product={product}
                  ></CategoryPageItem>))
                }    
          </div>
        </div>
    );
};

export default CategoryPage;