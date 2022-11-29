import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseTitle from "../../../Hooks/UseTitle";
import BookingModal from "../../CategorySection/BookingModal/BookingModal";

const AdvertiseCard = ({ product }) => {
  console.log(product)
    UseTitle('Advertise')
  const [booking, setBooking] = useState([]);
  // console.log(booking);



  return (
    <div>
       <a href="/" class="group block overflow-hidden">
          <img
            alt="Tee"
            src={product.img}
            class="h-[300px] w-full object-cover transition-transform duration-700   group-hover:scale-105 sm:h-[450px]"
              />
              <div class="relative bg-white gap-3 pt-4 flex ">
                <div>
                   <h3 class=" text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Name: {product.name}
                     </h3>
                     <p class="">
                     <span class="tracking-wider">
                      Old Price: £{product.old_price}{" "}
                      </span>
                     </p>
                     <p>Price: £{product.seller_price} </p>
                  </div>
                  <div className="text-start">
                    <p className="font-bold bg-yellow-400 rounded-md p-1 text-black">Status: {product?.status}</p>
                    <p className="dark:text-gray-600">Ratings: {product?.ratings}</p>
                    <span class="sr-only">g</span>
                 </div>
                 </div>
                 {/* <label
                   htmlFor="booking-modal"
                   className="hover:text-pink-600 hover:font-bold tracking-wider btn-xs btn   btn-ghost mb-3 uppercase text-slate-700"
                   >
                     
                 </label>  */}
                 <div>
                        <Link to={`/productDetails/${product._id}`}>
                          <button className=" py-1 px-3 btn btn-primary mt-3 ">
                         show details <FaArrowRight className="inline ml-2"></FaArrowRight>
                          </button>
                        </Link>
                      </div>         
              </a>
             <BookingModal booking={booking} setBooking={setBooking}></BookingModal>
        </div>
    );
};

export default AdvertiseCard;
