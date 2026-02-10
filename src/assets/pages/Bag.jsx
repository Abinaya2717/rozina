import React from "react";
import products from "../Products";
import "../Styles/carousel.css";

function Bag() {
  return (
    <>
      <div className="row p-3 ">
        {products
          .filter((v) => v.product == "bags")
          .map((v, i) => (
            <div className="col-lg-3" key={i}>
              <div className="card border-0 bg-transparent">
                <img src={v.img} className="men" />
                <div className="card-body">
                  <span className="badge  position-absolute love">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png"
                      alt="like--v1"
                    />
                  </span>
                  <span className="badge position-absolute love1">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/ios-filled/50/737373/shopping-cart.png"
                      alt="shopping-cart"
                    />
                  </span>
                  <span>name :{v.Name}</span>
                  <br />
                  <span>price:{v.price}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Bag;
