import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaBeer } from "react-icons/fa";
import Banner from "../Banner/Banner";
import DressGallery from "../DressGallery/DressGallery";
import LadiesClothes from "../../CategorySection/LadiesClothes/LadiesClothes";
import BabiesClothes from "../../CategorySection/BabiesClothes/BabiesClothes";




const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <DressGallery></DressGallery>
      <LadiesClothes></LadiesClothes>
      <BabiesClothes></BabiesClothes>
    </div>
  );
};

export default Home;
