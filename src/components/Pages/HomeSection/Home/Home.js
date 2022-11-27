import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Banner from "../Banner/Banner";
import DressGallery from "../DressGallery/DressGallery";
import ProductGallery from "../../../Pages/HomeSection/DressGallery/ProductGallery";
import AllCategories from "../../CategorySection/AllCategories/AllCategories";
import AdvertisedItem from '../../DashboardSection/AdveritsedItem/AdvertisedItem'
import AdvertiseCards from "../../DashboardSection/AdvertiseCards/AdvertiseCards";
// import AdvertiseCard from "../../DashboardSection/AdvertiseCard/AdvertiseCard";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
       <AdvertisedItem></AdvertisedItem>
      <AdvertiseCards></AdvertiseCards>
      {/* <AdvertiseCard></AdvertiseCard> */}
      <DressGallery></DressGallery>
      <ProductGallery></ProductGallery>
      <AllCategories></AllCategories>
    </div>
  );
};

export default Home;
