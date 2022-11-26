import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Banner from "../Banner/Banner";
import DressGallery from "../DressGallery/DressGallery";
import ProductGallery from "../../../Pages/HomeSection/DressGallery/ProductGallery";
import AllCategories from "../../CategorySection/AllCategories/AllCategories";
import AdvertisedIem from "../../DashboardSection/AdveritsedItem/AdvertisedItem";
// import AddService from "../../AddService";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertisedIem></AdvertisedIem>
      <DressGallery></DressGallery>
      <ProductGallery></ProductGallery>
      <AllCategories></AllCategories>
      {/* <AddService></AddService> */}
    </div>
  );
};

export default Home;
