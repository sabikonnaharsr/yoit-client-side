import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUser = () => {
  const {
    data: allUserData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allUserData"],

    queryFn: async () => {
      const res = await fetch("https://byte-code-velocity.vercel.app/allUsers");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteUser = (id) => {
    fetch(`https://byte-code-velocity.vercel.app/allUsers/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          toast.success("Successfully deleted");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
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
                <th>Seller</th>
                <th>Buyer</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allUserData.map((user, i) => (
                <tr key={user._id} className="hover">
                  <th>{i + 1}</th>
                  <th>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img alt="" src={user?.photoURL} />
                      </div>
                    </div>
                  </th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.accountType === "seller" && user?.accountType}</td>
                  <td>{user.accountType === "buyer" && user?.accountType}</td>

                  <td>
                    {user.accountType === "admin" ? (
                      <button className=" btn-ghost bg-primary text-white btn w-14 btn-xs hover:text-white rounded-xxl hover:bg-pink-600 ">
                        Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className=" btn-ghost bg-success btn w-14 btn-xs hover:text-white rounded-xxl hover:bg-pink-600 "
                      >
                        Delete
                      </button>
                    )}
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

export default AllUser;
