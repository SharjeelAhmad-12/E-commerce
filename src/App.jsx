import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      id: 1,
      name: "Black Sweater",
      price: 29.99,
      rating: 4.5,
      image: "/public/product-images/Black-Sweater.webp",
    },
    {
      id: 2,
      name: "Brown Sweater",
      price: 39.99,
      rating: 4.2,
      image: "/public/product-images/Offwhite-Sweater.webp",
    },
    {
      id: 3,
      name: "White Sweater",
      price: 49.99,
      rating: 4.8,
      image: "/public/product-images/White-Sweater.webp",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection products={products} />
      <Footer />
    </>
  );
}

export default App;
