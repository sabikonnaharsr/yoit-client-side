import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Banner from "../Banner/Banner";
import DressGallery from "../DressGallery/DressGallery";
import ProductGallery from "../../../Pages/HomeSection/DressGallery/ProductGallery";
import AllCategories from "../../CategorySection/AllCategories/AllCategories";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <DressGallery></DressGallery>
      <ProductGallery></ProductGallery>
      <AllCategories></AllCategories>
    </div>
  );
};

export default Home;
