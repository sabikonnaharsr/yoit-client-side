import React, { useEffect, useState } from 'react';
import AllCategory from '../AllCategory/AllCategory';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const AllCategories = () => {
    const {data: categories = [], refetch, isLoading} = useQuery({
    queryKey: ['categories'],
    queryFn: async()=> {
        const res = await fetch('http://localhost:5000/threeCollection');
        const data = await res.json();
        return data
    }
})
    console.log(categories);
    return (
        <div>
           <div className='w-11/12 mx-auto py-16 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4"'>
            {
                categories?.map(category =><AllCategory
                key={category._id}
                category={category}
                ></AllCategory>)
            }
            
            </div> 
        </div>
    );
};

export default AllCategories;