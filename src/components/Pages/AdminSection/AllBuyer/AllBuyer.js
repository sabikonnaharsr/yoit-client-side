import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {
    const {
        data: allBuyerData = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["allBuyerData"],
    
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/allBuyers');
          const data = await res.json();
          return data;
        },
      });
      if (isLoading) {
        return <div>loading...</div>;
      }


    // 
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
                <th>Account Type</th>
              </tr>
            </thead>
            <tbody>
              {allBuyerData.map((buyer, i) => (
                <tr key={buyer._id} className="hover">
                  <th>{i + 1}</th>
                  <th>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img alt="" src={buyer?.photoURL} />
                      </div>
                    </div>
                  </th>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td>{buyer.accountType}</td>          
                </tr>
              ))}
            </tbody>
          </table>
        </div>
           </div>
        </div>
    );
};

export default AllBuyer;