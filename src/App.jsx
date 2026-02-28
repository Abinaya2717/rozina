import { useState } from "react";
import Navbar from "./assets/pages/CommonComponents/Navbar";
import Carousel from "./assets/pages/Carousel";
import Shop from "./assets/pages/Shop";
import Men from "./assets/pages/Men";
import Women from "./assets/pages/Women";
import Kid from "./assets/pages/Kid";
import Jewel from "./assets/pages/Jewel";
import Bag from "./assets/pages/Bag";
import Skincare from "./assets/pages/Skincare";
import Watch from "./assets/pages/Watch";
// import Contact from "../src/assets/pages/Contact"
import Footer from "./assets/pages/CommonComponents/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./assets/pages/Login";
import Toys from "./assets/pages/Toys";

import Context from "./assets/Contextprovider/Context";
import Product from "./assets/pages/Product";
import ScrollTop from "./assets/ScrollTop";

function App() {

  return (
    
    <div className=" overflow-hidden  position-relative ">
      <style>
        {`
          .ButtonTop {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: #4338CA;
            color: white;
            padding: 15px;
            border-radius: 100px;
            border: 1px solid #F59E0B;
            cursor: pointer;
            animation: bounce 1.5s infinite;
          }

          @keyframes bounce {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>

      <BrowserRouter>
       <ScrollTop />
        <Context>
          <Navbar />
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Kid" element={<Kid />} />
            <Route path="/Jewel" element={<Jewel />} />
            <Route path="/Bag" element={<Bag />} />
            <Route path="/Skincare" element={<Skincare />} />
            <Route path="/Watch" element={<Watch />} />
            {/* <Route path='/Contact' element={<Contact/>}/> */}
            <Route path="/Login" element={<Login />} />
            <Route path="/Toys" element={<Toys />} />
            <Route path="/Product/:Id" element={<Product />} />
          </Routes>
        </Context>
        <Footer />
      </BrowserRouter>

      <a href="#">
        <button className="ButtonTop"><i class="fa-solid fa-arrow-up"></i></button>
      </a>
    </div>
  );
}

export default App;
