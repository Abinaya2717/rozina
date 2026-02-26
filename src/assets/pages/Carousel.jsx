import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Styles/style.css";

import img1 from "../images/commomImg/banner1.jpg";
import img2 from "../images/commomImg/banner3.jpg"

import wo from "../images/WomenProImg/wo.png";
import me from "../images/menImg/me.png";
import kid from "../images/Kidsimages/kid.png";

import image1 from "../images/JewelImg/jewel.png";
import image2 from "../images/SkincareImg/cos.png";
import image3 from "../images/WatchesImage/watch.png";
import image4 from "../images/BagsImage/bags.png";
import image5 from "../images/toysimages/to1.jfif"

import { useNavigate } from "react-router-dom";
import products from "../Products";
// import Carousel3 from "./carousel/Carousel3";

function Carousel() {
  const navigate = useNavigate();
  return (
    <>
      {/* carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide p-5 caro"
        data-bs-ride="carousel "
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner bg-dark ">
          <div className="carousel-item active ">
            <img src={img1} width="100%" height="500px" />
          </div>

          <div className="carousel-item">
         <img src={img2} width="100%" height="500px" />
         </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <hr />
      {/* content */}
      <center>
        <h3 className="text">Outfits For Winter</h3>
      </center>
      <center>
        <h5 className="h5">
          Immerse yourself in the allure of fine fabrics and meticulous
          detailing, showcasing the epitome of sartorial splendour.
        </h5>
      </center>
      <center>
        <button
          className="btn btnexpo border-0 m-2"
          onClick={() => navigate("/shop")}
        >
          Explore Collections
        </button>
      </center>

      {/* Cards */}
      {/* <div className="p-5 card-bg">
        <div className="row ">
          <div className="col-lg-4">
            <div className="card border-0 bg-transparent">
              <img src={wo} alt="" onClick={() => navigate("/Women")} />
              <center>
                <h5 className="m-3 textcat">Women's</h5>
              </center>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 bg-transparent">
              <img src={me} alt="" onClick={() => navigate("/Men")} />
              <center>
                <h5 className="m-3 textcat">Men's</h5>
              </center>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 bg-transparent">
              <img src={kid} alt="" onClick={() => navigate("/Kid")} />
              <center>
                <h5 className="m-3 textcat">Kid's</h5>
              </center>
            </div>
          </div>
        </div>
      </div> */}
      <div className="p-5 card-bg " >
  <div className="row g-4 justify-content-center">
    <div className="col-lg-4 col-md-6">
      <div className="card border-0 bg-transparent h-100">
        <img 
          src={wo} 
          alt="Women's Collection" 
          onClick={() => navigate("/Women")}
          className="img-fluid rounded-4 shadow-hover"
        />
        <center>
          <h5 className="m-3 textcat fw-bold">Women's</h5>
        </center>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="card border-0 bg-transparent h-100">
        <img 
          src={me} 
          alt="Men's Collection" 
          onClick={() => navigate("/Men")}
          className="img-fluid rounded-4 shadow-hover"
        />
        <center>
          <h5 className="m-3 textcat fw-bold">Men's</h5>
        </center>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="card border-0 bg-transparent h-100">
        <img 
          src={kid} 
          alt="Kid's Collection" 
          onClick={() => navigate("/Kid")}
          className="img-fluid rounded-4 shadow-hover"
        />
        <center>
          <h5 className="m-3 textcat fw-bold">Kid's</h5>
        </center>
      </div>
    </div>
  </div>
</div>
      <center>
        <h5 className="textcat mb-2 p-4">
          Trendy And Fashionable Outfits For The Festivals!
        </h5>
      </center>
      <center>
       
      </center>

      {/* card&carousel */}

      <div className="row d-flex justify-content-between ">
        <div className="col-lg-2 my-4  d-flex justify-content-center ">
          <div className="card border-0 ">
            <img
              src={image1}
              width="200px"
              height="200px"
              className="border-0 rounded-circle bg-danger"onClick={() => navigate("/Jewel")}
            />
            <span className="text-center " onClick={() => navigate("/Jewel")}>
              Jewls Collections
            </span>
          </div>
        </div>
        <div className="col-lg-2 my-4 d-flex justify-content-center ">
          <div className="card border-0 bg-transparent">
            <img
              src={image2}
              width="200px"
              height="200px"
              className="border-0 rounded-circle" onClick={() => navigate("/Skincare")}
            />
            <span className="text-center" onClick={() => navigate("/Skincare")}>
              Skin Collections
            </span>
          </div>
        </div>
        <div className="col-lg-2 my-4 d-flex justify-content-center ">
          <div className="card border-0 bg-transparent ">
            <img
              src={image3}
              width="200px"
              height="200px"
              className="border-0 rounded-circle"onClick={() => navigate("/Watch")}
            />
            <span className="text-center" onClick={() => navigate("/Watch")}>
              Watch Collections
            </span>
          </div>
        </div>
        <div className="col-lg-2 my-4 d-flex justify-content-center ">
          <div className="card border-0  ">
            <img
              src={image4}
              width="200px"
              height="200px"
              className="border-0 rounded-circle" onClick={() => navigate("/Bag")}
            />
            <span className="text text-center" onClick={() => navigate("/Bag")}>
              Bag Collections
            </span>
          </div>
        </div>
        <div className="col-lg-2 my-4 d-flex justify-content-center ">
          <div className="card border-0 bg-transparent ">
            <img
              src={image5}
              width="200px"
              height="200px"
              className="border-0 rounded-circle" onClick={() => navigate("/Toys")}
            />
            <span className="text text-center" onClick={() => navigate("/Toys")}>
              Toys Collections
            </span>
          </div>
        </div>
      </div>
      
      <br />

    {/* new arrivals */}
      <h1 className="container text-dark p-2">Womens Collections</h1>
      <div className=" row p-2 ">
            {products.filter(v => v.Category === "New arrival").map((v, i) => (
        <div className="col-lg-2" key={i}>
          <div className="card border-0 bg-transparent">
            <img src={v.img} className="card-img-top" alt={v.Name} height={"200px"} />
            <div className="card-body">
              <span>name : {v.Name}</span><br />
              <span>price : ₹{v.Price}</span>
            </div>
          </div>
        </div>
      ))}
      </div>
      {/* Recent arrivals */}
      <h1 className="container text-dark p-3">Recent arrivals</h1>
      <div className=" row ">
            {products.filter(v => v.Category === "Recent arrival").map((v, i) => (
        <div className="col-lg-2" key={i}>
          <div className="card border-0 bg-transparent">
            <img src={v.img} className="card-img-top rounded-circle" alt={v.Name} height={"200px"} />
            <div className="card-body">
              <span>name : {v.Name}</span><br />
              <span>price : ₹{v.price}</span>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default Carousel;
