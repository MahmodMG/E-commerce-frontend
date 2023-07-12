import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainSlider from "./components/MainSlider/MainSlider";
import CategorySlider from "./components/CategorySlider/CategorySlider";
import Products from "./components/Products/Products";

export default function App() {
  return (
    <>
      <Navbar />
      <MainSlider />
      <CategorySlider />
      <Products />
    </>
  );
}
