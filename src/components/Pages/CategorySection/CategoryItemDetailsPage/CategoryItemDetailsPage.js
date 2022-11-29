import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import { FaGratipay,  FaStarHalfAlt, FaPlus, FaRegHeart} from "react-icons/fa";
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from "react-hot-toast";
import UseTitle from '../../../Hooks/UseTitle';


const CategoryItemDetailsPage = () => {
  UseTitle('Category Item Details')
  const { user } = useContext(AuthContext)
  const [booking, setBooking] = useState([]);
   const detailsProduct = useLoaderData();
   const {name, img, description, seller_price, old_price, ratings, location, _id} = detailsProduct;

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
           <h1 className='text-5xl font-bold text-center mb-2 text-cyan-500 mt-10 hover:text-[#DEB597]'>LE ITALIAN WIDE LEG OVERALL</h1>
           <p className='text-2xl text-center text-cyan-500 hover:text-pink-600'>100% Cotton Made in Italy Designer Model Number: DS01B7527MAC Designer Color: 53</p>
           <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
             <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                   <div className="max-w-xl mb-6">
                     <div className='flex justify-between items-center'>
                      <h2 className=" max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl uppercase sm:leading-none">
                      {name}
                      <br className="hidden md:block" />
                      </h2>
                        <div className='flex text-2xl btn btn-ghost mb-3 '>
                         <div onClick={() => handleWishlist(detailsProduct)}>
                         <FaRegHeart></FaRegHeart>
                         </div>
                          <div>
                           <label   
                            onClick={() => setBooking(detailsProduct)} htmlFor="booking-modal" className="text-2xl btn btn-ghost mb-3 ">
                            <FaPlus></FaPlus>
                         </label>
                        </div>
                      </div>
                     </div>
                    
                     <p className='font-semibold uppercase'>Release Price: {seller_price}</p>
                     <p className='font-semibold uppercase'>Old Price: {old_price}</p>
                     <span className="inline-block uppercase font-semibold text-deep-purple-accent-400">
                        Ratings: {ratings}
                     </span>
                     <p className='font-bold uppercase'>Location: {location}</p>
                     <p className="text-base uppercase text-gray-700">
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
                <Link to={`/payment/${_id}`}>checkout</Link>
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