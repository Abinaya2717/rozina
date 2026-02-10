import React from "react";
import products from "../Products";
import "../Styles/Carousel.css";
function Women() {
  return (
    <div>
      <div className="row  ">
        {products
          .filter((v) => v.product == "women")
          .map((v, i) => (
            <div className="col-lg-3" key={i}>
              <div className="card border-0 bg-transparent">
                <img src={v.img} alt="images" className="men" />
                <div className="card-body">
                  <span className="badge bg-transparent position-absolute love">
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png"
                      alt="like--v1"
                    />
                  </span>
                  <span className="badge bg-transparent position-absolute love1">
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/ios-filled/50/737373/shopping-cart.png"
                      alt="shopping-cart"
                    />
                  </span>
                  <span>Name : {v.Name}</span>
                  <span>price:{v.Price}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Women;
