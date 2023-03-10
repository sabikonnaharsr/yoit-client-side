import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import UseTitle from "../../../Hooks/UseTitle";

const Wishlist = () => {
  UseTitle("Wishlist");
  const { user } = useContext(AuthContext);
  const url = `https://byte-code-velocity.vercel.app/get-wishlist`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 md:grid-cols-2">
      <h2 className="text-slate-500 text-3xl mt-10 text-center mb-3 font-bold uppercase">
        Please select your product
      </h2>
      <h3 className="text-pink-500  text-3xl font-bold text-center mb-7">
        <span className="text-slate-500 uppercase">Add </span>
        <span className="text-pink-500 ">
          <span className=" font-bold text-pink-700">TO</span>
        </span>
        <span className="text-slate-500 uppercase"> Wishlist</span>
      </h3>

      <div>
        <div className="overflow-x-auto ">
          <table className="table w-full">
            {/*  <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Old Price</th>
                <th>Seller Price</th>
                <th>Date</th>
                <th>Location</th>
                <th>Advertised</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, i) => (
                <tr key={booking._id} className="hover">
                  <th>{i + 1}</th>
                  <th>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img alt="" src={booking.img} />
                      </div>
                    </div>
                  </th>
                  <td>{booking.name}</td>
                  <td>{booking.old_price}</td>
                  <td>{booking.seller_price}</td>
                  <td>{booking.time}</td>
                  <td>{booking.location}</td>
                  <td>
                    <button className="btn-ghost btn w-21 btn-xs hover:text-white rounded-xxl hover:bg-pink-600 ">
                      Advertise
                    </button>
                  </td>
                  <td>
                    <button className=" btn-ghost btn w-14 btn-xs hover:text-white rounded-xxl hover:bg-pink-600 ">
                      pay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
