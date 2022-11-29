import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Banner from "../Banner/Banner";
import DressGallery from "../DressGallery/DressGallery";
import ProductGallery from "../../../Pages/HomeSection/DressGallery/ProductGallery";
import AllCategories from "../../CategorySection/AllCategories/AllCategories";
import MyProducts from "../../ProductSection/MyProducts/MyProducts";
import Advertise from "../../DashboardSection/Adveritse/Advertise";




const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Advertise></Advertise>
      <MyProducts></MyProducts>  
      <DressGallery></DressGallery>
      <ProductGallery></ProductGallery>
      <AllCategories></AllCategories>
    </div>
  );
};

export default Home;
