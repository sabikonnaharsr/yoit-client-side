import React from 'react';
import toast from 'react-hot-toast';
import UseTitle from '../../../Hooks/UseTitle';



const MyProduct = ({myProduct, refetch}) => {  
    UseTitle('My Product');
    
    const handleAdvertiseMyProduct = (id, myProduct) =>{
        fetch(`http://localhost:5000/myProductAdvertise/${id}`)
        .then(res => res.json())
        .then(data => {console.log(data)
            if(data.modifiedCount > 0){
                toast.success(`${myProduct?.name} advertise is done`)
                refetch();
            }
        
        
        })
    }
    const handleDeleteMyProduct = (id) => {
        fetch(`http://localhost:5000/reportedProduct/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {console.log(data)
          if(data.deletedCount > 0){
             toast.success('My product is deleted successfully')
             refetch()
          }
        
        })
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

                      <button onClick={() => handleAdvertiseMyProduct(myProduct._id)} type="button" className="btn btn-ghost btn-xs  dark:text-gray-500 hover:text-sky-500 hover:font-bold ">{myProduct?.advertiseShow?"advertised": "advertise"}</button>     
                      <button onClick={() => handleDeleteMyProduct(myProduct._id)} type="button" className="btn btn-ghost btn-xs dark:text-gray-500 hover:text-sky-500 hover:font-bold ">Delete</button>     
                    </div>   
                  </div>    
                </div>  
            </div>
        </div>
    );
};

export default MyProduct;