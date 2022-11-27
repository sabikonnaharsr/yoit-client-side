// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import BookingModal from '../../CategorySection/BookingModal/BookingModal';


// const ShowAdvertise = ({product}) => {
//     const [booking, setBooking] = useState([]);
//  console.log(booking);
 


//     return (
//         <div>

//            <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-xs dark:bg-gray-50 dark:text-gray-100">
//                <img src={product?.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
//                 <div className="flex flex-col justify-between p-6 space-y-8">
//                   <div className="space-y-2">
//                      <h2 className="text-3xl  text-slate-600 tracking-wide font-bold">Name: {product?.name}</h2>
//                      <p className="dark:text-gray-600 font-bold">Seller Price: {product?.seller_price}</p>
//                      <p className="dark:text-gray-600 font-bold">Old Price{product?.old_price}</p>
//                      <p className="dark:text-gray-600 font-bold">Ratings: {product?.ratings}</p>
//                      <p className="dark:text-gray-600 font-bold">Status: {product?.status}</p>
//                      <button type="button" className="btn btn-ghost btn-xs  dark:text-gray-500">Advertise</button>          
//                    </div> 
//                    <label   
//                      htmlFor="booking-modal" className="hover:text-primary mb-3  text-slate-700">
//                      text
//                  </label>
//                 </div>  
//                 <BookingModal 
//                booking={booking}
//               ></BookingModal>
//             </div>
            
//         </div>
//     );
// };

// export default ShowAdvertise;