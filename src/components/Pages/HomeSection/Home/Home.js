import React from "react";
import LadiesClothes from "../../CategorySection/LadiesClothes/LadiesClothes";
import { ToastContainer, toast } from "react-toastify";
import { FaBeer } from "react-icons/fa";
import Banner from "../Banner/Banner";
import DressGallery from "../DressGallery/DressGallery";
import BabiesClothes from "../../../Pages/CategorySection/BabiesClothes/BabiesClothes"
import MensClothes from "../../../Pages/CategorySection/MensClothes/MensClothes";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <DressGallery></DressGallery>
      <LadiesClothes></LadiesClothes>
       <BabiesClothes></BabiesClothes>
      <MensClothes></MensClothes>
    </div>
  );
};

export default Home;
