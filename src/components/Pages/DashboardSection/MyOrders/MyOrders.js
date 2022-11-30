import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myOrders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myOrders"],

    queryFn: async () => {
      const res = await fetch(
        `https://byte-code-velocity.vercel.app/myBookings?email=${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  //   const handlePayment = (id) => {
  //     console.log(id)
  //   }

  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/*  <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Location</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, i) => (
              <tr key={order._id} className="hover">
                <th>{i + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img alt="" src={order?.img} />
                    </div>
                  </div>
                </th>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.seller_price}</td>
                <td>{order.location}</td>

                <td>
                  <Link to={`/payments/${order._id}`}>
                    {" "}
                    <button
                      //   onClick={() =>  handlePayment(order._id)}
                      className=" btn-ghost bg-success btn w-14 btn-xs hover:text-white rounded-xxl hover:bg-pink-600 "
                    >
                      Pay Now
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
