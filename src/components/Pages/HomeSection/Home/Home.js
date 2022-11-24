import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaBeer } from "react-icons/fa";
import Banner from "../Banner/Banner";
import AppointmentOption from "../../AppointmentSection/AppointmentOption/AppointmentOption";
import DressGallery from "../DressGallery/DressGallery";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <DressGallery></DressGallery>
     
    </div>
  );
};

export default Home;
