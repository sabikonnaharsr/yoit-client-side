import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../../Shared/Spinner";
import BookingModal from "../BookingModal/BookingModal";
import AdvertiseCard from "./AdvertiseCard";

const AdvertisedIem = () => {
  // const [categoriesData, setCategoriesData] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [modalOpenClose, setModalOpenClose] = useState(null);

  const {
    data: categoriesData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertise-products", {});
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto bg-white text-black px-4 pt-12">
      {categoriesData.length > 0 && (
        <div className="font-Babes text-4xl tracking-wide border-l-4 border-red-400 mt-0 lg:mt-10">
          <h1 className="px-3 text-[21px]">Popular Item in </h1>
          <h1 className="px-3">
            the market{" "}
            <span className="text-red-400 tracking-widest">Trending</span>
          </h1>
        </div>
      )}
      {categoriesData.length > 0 && (
        <div className="grid lg:grid-cols-3 justify-center gap-10 lg:w-[75%] mx-auto mt-10 py-16">
          {categoriesData.map((ads, inx) => (
            <AdvertiseCard
              key={inx}
              ads={ads}
              setModalOpenClose={setModalOpenClose}
              setModalData={setModalData}
            ></AdvertiseCard>
          ))}
        </div>
      )}
      {modalOpenClose && (
        <BookingModal
          setModalOpenClose={setModalOpenClose}
          modalData={modalData}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AdvertisedIem;

// {
//   /* <div
//             key={inx}
//             className="flex flex-col m-4 lg:m-8 rounded shadow-md animate-pulse h-96"
//           >
//             <div className="h-48 rounded-t dark:bg-gray-700"></div>
//             <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
//               <div className="w-full h-6 rounded dark:bg-gray-700"></div>
//               <div className="w-full h-6 rounded dark:bg-gray-700"></div>
//               <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
//             </div>
//           </div> */
// }