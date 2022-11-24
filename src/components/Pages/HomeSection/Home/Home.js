import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaBeer } from "react-icons/fa";
import Banner from "../Banner/Banner";
import DressGallery from "../DressGallery/DressGallery";
import Card from "../../Card/Card";
import LadiesClothes from "../../CategorySection/LadiesClothes/LadiesClothes";




const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <DressGallery></DressGallery>
      <LadiesClothes></LadiesClothes>
      {/* <Card></Card> */}
  
    </div>
  );
};

export default Home;
