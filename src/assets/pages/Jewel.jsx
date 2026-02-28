import React, { useContext } from 'react'
import products from "../Products";
import "../Styles/Carousel.css";
import Mycontext from '../Contextprovider/Mycontext';
import { useNavigate } from 'react-router-dom';

function Jewel() {
  var {addtocart}=useContext(Mycontext)
   var {Wishlist}=useContext(Mycontext)

   const navigate = useNavigate();
  return (
    <>
    <div className="row p-3 g-4">
      {products
        .filter((v) => v.product == "jewels")
        .map((v, i) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={i}>
            <div className="card  bg-light shadow-sm  h-100">
              <div className="">
                <img
                  src={v.img}
                  style={{ height: "250px", borderRadius: "0px" ,width:"100%"}}
                  alt={v.Name}  onClick={() => navigate(`/Product/${v.id}`)}
                />

                {/* Wishlist Button */}
                <span className="badge bg-white  position-absolute newlove p-1 rounded-circle shadow-sm">
                  <i
                    className="fa-regular fa-heart text-danger"
                    onClick={() => Wishlist(v.id)}
                  ></i>
                </span>

                {/* Cart Button */}
                <span
                  className="badge bg-white position-absolute love1 my-3 p-1 rounded-circle shadow-sm"
                  onClick={() => addtocart(v.id)}
                >
                  <i class="fa-solid fa-bag-shopping text-success "></i>
                </span>

              </div>

              <div
                className="card-body  p-3"
                style={{ backgroundColor: "#e5e7fa" }}
              >
                <h6 className="card-title fw-semibold text-dark mb-2">
                  {v.Name}
                </h6>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-muted small d-block mb-1">
                      Price:
                    </span>
                    <span className="h5 fw-bold text-primary">${v.price}</span>
                  </div>
                </div>

                {/* Optional: Quick Actions */}
                <div className="d-grid gap-2 mt-3">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => {
                      /* View details function */
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default Jewel
