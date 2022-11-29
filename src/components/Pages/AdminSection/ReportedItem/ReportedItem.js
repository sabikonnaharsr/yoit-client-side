import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ReportedItem = () => {
    // 
    const {
        data: reportedProduct = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["reportedProduct"],
    
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/reportedProduct');
          const data = await res.json();
          return data;
        },
      });

      const handleDeleteReportedProduct = (id) => {
        fetch(`http://localhost:5000/reportedProduct/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {console.log(data)
          if(data.deletedCount > 0){
             toast.success('Reported product is deleted successfully')
             refetch()
          }
        
        })
      }


      if (isLoading) {
        return <div className='text-center'>loading...</div>;
      }


    return (
        <div>
        <div className="overflow-x-auto ">
           <table className="table w-full">
            {/*  <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Product Id</th>
                <th>Seller Name</th>
                <th>Seller Location</th>
                <th>Seller Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reportedProduct.map((report, i) => (
                <tr key={report._id} className="hover">
                  <th>{i + 1}</th>
                  <th>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img alt="" src={report?.img} />
                      </div>
                    </div>
                  </th>
                  <td>{report.name}</td>
                  <td>{report._id}</td>
                  <td>{report?.sellerName}</td>
                  <td>{report?.location}</td>
                  <td>{report?.phoneNumber}</td>       
                 <td> 
          
                      <button
                      onClick={() =>  handleDeleteReportedProduct(report._id)}
                      className=" btn-ghost bg-success btn w-14 btn-xs hover:text-white rounded-xxl hover:bg-pink-600 ">
                      Delete
                    </button>            
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default ReportedItem;