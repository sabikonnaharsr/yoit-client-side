import React from 'react';

const MyProduct = ({myProduct}) => {
     
    const handleAdvertise = (id) =>{
        console.log(id)

    }

   



    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-100">
               <img src={myProduct?.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                 <div className="flex flex-col justify-between p-6 space-y-8">
                   <div className="space-y-2">
                     <h2 className="text-xl font-semibold text-slate-600 tracking-wide">Name: {myProduct?.name}</h2>
                      <p className="dark:text-gray-600">Price: ${myProduct?.seller_price}</p>
                      <p className="dark:text-gray-600">Old Price: ${myProduct?.old_price}</p>
                      <p className="dark:text-gray-600">Ratings: {myProduct?.ratings}</p>
                      <div className='flex gap-3 justify-between'>
                      <button onClick={() => handleAdvertise(myProduct._id)} type="button" className="btn btn-ghost btn-xs  dark:text-gray-500 hover:text-sky-500 hover:font-bold ">Advertise</button>   
                     
                    </div>   
                    </div>    
                </div>  
            </div>
        </div>
    );
};

export default MyProduct;