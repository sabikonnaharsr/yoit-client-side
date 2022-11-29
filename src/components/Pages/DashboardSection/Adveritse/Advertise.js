import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";
import AdvertiseCard from "../AdvertiseCard/AdvertiseCard";

// import AdvertiseCard from "../AdvertiseCard/AdvertiseCard";
// import Spinner from "../../Shared/Spinner";
// import BookingModal from "../BookingModal/BookingModal";


const Advertise = () => {
  const {user} = useContext(AuthContext)
  // const [categoriesData, setCategoriesData] = useState([]);
  // const [modalData, setModalData] = useState([]);
  // const [modalOpenClose, setModalOpenClose] = useState(null);

  const {
    data: advertiseData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["advertiseData"],
   
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/advertise-products');
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <div>loading...</div>;
  }
  

  return (
    <div className="container mx-auto bg-white text-black px-4 pt-12">
      {advertiseData.length < 1 && (
        <div className="font-Babes text-4xl tracking-wide border-l-4 border-red-400 mt-0 lg:mt-10">
          <p className="text-2xl font-bold text-gray-600">I have no any my product</p>
          <p  className="text-2xl font-bold text-gray-600">Please go to add product</p>
          {/* <h1 className="px-3 text-[21px]">Popular Item in </h1>
          <h1 className="px-3">
            the market{" "}
            <span className="text-red-400 tracking-widest">Trending</span>
          </h1> */}
        </div>
      )}
     
        <div className="grid lg:grid-cols-3 justify-center gap-10 lg:w-[75%] mx-auto mt-10 py-16">
          {advertiseData.map((product, inx) => (<AdvertiseCard
          key={inx}
          product={product}
          ></AdvertiseCard>
            
          ))}
        </div>
     
      {/* {modalOpenClose && (
        <BookingModal
          setModalOpenClose={setModalOpenClose}
          modalData={modalData}
          refetch={refetch}
        />
      )} */}
    </div>
  );
};

export default Advertise;

