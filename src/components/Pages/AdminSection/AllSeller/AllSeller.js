import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllSeller = () => {
  const {
    data: allSellerData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allSellerData"],

    queryFn: async () => {
      const res = await fetch(
        " https://byte-code-velocity.vercel.app/allSellers"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div className="grid gird-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <div className="overflow-x-auto ">
          <table className="table w-full">
            {/*  <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Account Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allSellerData.map((seller, i) => (
                <tr key={seller._id} className="hover">
                  <th>{i + 1}</th>
                  <th>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img alt="" src={seller?.photoURL} />
                      </div>
                    </div>
                  </th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>{seller.accountType}</td>
                  <td>
                    <button className=" btn-ghost bg-success btn w-14 btn-xs hover:text-white rounded-xxl hover:bg-pink-600 ">
                      verify
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

export default AllSeller;
