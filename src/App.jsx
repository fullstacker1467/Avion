import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/home";
import Basket from "./pages/Basket/Basket";
import Product from "./pages/Products/Product";
import Contact from "./pages/Contact/Contact";
import User from "./pages/User/User";
import ProductID from "./pages/Products/ProductID/ProductID";
import Footer from "./components/Footer/Footer";
import { About } from "./pages/About/About";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/" element={<ProductID />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
