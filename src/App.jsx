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

function App() {
  return (
    <div className=" overflow-hidden">
      <BrowserRouter>
          <Context>
        <Navbar  />
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
        </Routes>
         </Context>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
