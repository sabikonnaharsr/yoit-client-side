import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryPageItem from '../CategoryPageItem/CategoryPageItem';

const CategoryPage = () => {
    const categoryData = useLoaderData();
    console.log(categoryData)

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>           
                {
                  categoryData.length > 0 && 
                  categoryData.map(product => ( 
                  <CategoryPageItem 
                  key={product._id}
                  product={product}
                  ></CategoryPageItem>))
                }
        </div>
    );
};

export default CategoryPage;