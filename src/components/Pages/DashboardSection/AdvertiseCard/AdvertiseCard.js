import React from 'react';


const AdvertiseCard = ({myProduct}) => {


    
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-100">
                <img src={myProduct?.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                     <h2 className="text-3xl font-semibold text-slate-600 tracking-wide">{myProduct?.name}</h2>
                     <p className="dark:text-gray-600">{myProduct?.seller_price}</p>
                     <p className="dark:text-gray-600">{myProduct?.old_price}</p>
                     <p className="dark:text-gray-600">{myProduct?.ratings}</p>
                     {/* <p className="dark:text-gray-600">{myProduct?.description}</p> */}
                     <button type="button" className="btn btn-ghost btn-xs  dark:text-gray-500">Advertise</button>   
                     <button type="button" className="btn btn-ghost btn-xs  dark:text-gray-500">Delete</button>   
                    </div>    
                </div>  
            </div>
        </div>
    );
};

export default AdvertiseCard;