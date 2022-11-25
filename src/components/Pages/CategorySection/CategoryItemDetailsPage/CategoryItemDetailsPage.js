import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import { FaGratipay,  FaStarHalfAlt, FaRegPlusSquare } from "react-icons/fa";
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from "react-hot-toast";


const CategoryItemDetailsPage = () => {
  const { user } = useContext(AuthContext)
  const [booking, setBooking] = useState([]);
 console.log(booking);
   const detailsProduct = useLoaderData();

   const {name, img, description, seller_price, old_price, ratings, location} = detailsProduct;

   const handleWishlist = (product) => {
    const wishlistProduct = {...product, productId: product._id, email: user?.email || 'example@gmail.com', time: new Date().toLocaleString()}

    delete wishlistProduct._id
    fetch('http://localhost:5000/wishlist',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(wishlistProduct)
    }
    )
  
    .then(res => res.json())
    .then(data => {console.log(data)
      if(data.acknowledged){
        toast.success('This product is successfully add in wishlist')
      }else{
        toast.error(data.message)
      }
    
    })
    .catch(error => console.error(error));


   }

    
    return (
        <div>
           <h1 className='text-6xl text-center text-cyan-500 mt-7 font-GreatVibes'>Welcome to our'S Collection...</h1>
           <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
             <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                   <div className="max-w-xl mb-6">
                     <div className='flex justify-between items-center'>
                      <h2 className=" max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                      {name}
                      <br className="hidden md:block" />
                      </h2>
                        <div className='flex gap-4 text-2xl hover:text-primary mb-3 text-black'>
                         <div onClick={() => handleWishlist(detailsProduct)}>
                         <FaGratipay></FaGratipay>
                         </div>
                        <label   
                            onClick={() => setBooking(detailsProduct)} htmlFor="booking-modal" className="hover:text-primary mb-3 text-black">
                            <FaRegPlusSquare></FaRegPlusSquare>
                        </label>
                      </div>
                     
                     </div>
                    
                     <p className='font-semibold'>Release Price: {seller_price}</p>
                     <p className='font-semibold'>Old Price: {old_price}</p>
                     <span className="inline-block font-semibold text-deep-purple-accent-400">
                        Ratings: {ratings}
                     </span>
                     <p className='font-semibold'>Location: {location}</p>
                     <p className="text-base text-gray-700 md:text-lg">
                    {description}
                    </p>
                   
                    <div className='flex gap-2'>
                      <span className='text-yellow-500'><FaStarHalfAlt></FaStarHalfAlt></span>
                      <span className='text-yellow-500'><FaStarHalfAlt></FaStarHalfAlt></span>
                      <span className='text-yellow-500'><FaStarHalfAlt></FaStarHalfAlt></span>
                    </div>
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
        </div>
        <div>
       { 
        
       <BookingModal
        booking={booking} 
        ></BookingModal>}
      </div>
     </div>
    );
};

export default CategoryItemDetailsPage;