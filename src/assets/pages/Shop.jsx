import React from "react";
import { useNavigate } from "react-router-dom";

function Shop() {
  
 

  return (
    <>
      <div className="row container p-5">
        <div className="col-lg-3 col-sm-12">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Product Category
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div className="d-flex justify-content-between">
                    <span>Womens</span>
                    <span>12</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Mens</span>
                    <span>12</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Kids</span>
                    <span>12</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Jewels</span>
                    <span>12</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Skincare</span>
                    <span>12</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Bags</span>
                    <span>12</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Watches</span>
                    <span>12</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Price
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                 <div>
                  <span>500-1000</span>
                 </div>
                 <div>
                  <span>1000-1500</span>
                 </div>
                 <div>
                  <span>1500-2000</span>
                 </div>
                 <div>
                  <span>2000-2500</span>
                 </div>
                  <div>
                  <span>2500-3000</span>
                 </div>
                  <div>
                  <span>3000-3500</span>
                 </div>
                  <div>
                  <span>3500-4000</span>
                 </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Price
                </button>
              </h2>
              <div
                id="collapseTwoE"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                 <div>
                  <span>S-M</span>
                 </div>
                 <div>
                  <span>M</span>
                 </div>
                 <div>
                  <span>M-L</span>
                 </div>
                 <div>
                  <span>L</span>
                 </div>
                  <div>
                  <span>L-XL</span>
                 </div>
                  <div>
                  <span>XL</span>
                 </div>
                  <div>
                  <span>XL-XXL</span>
                 </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  colors
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div className="d-flex justify-content-between">
                    
                   <span>🖤Black</span>
                   <span>(10)</span>

                  </div>
                   <div className="d-flex justify-content-between">
                    
                   <span>💜Purple</span>
                   <span>(15)</span>

                  </div>
                   <div className="d-flex justify-content-between">
                    
                   <span>💙Blue</span>
                   <span>(20)</span>

                  </div>
                   <div className="d-flex justify-content-between">
                    
                   <span>🤍White</span>
                   <span>(40)</span>

                  </div>
                  
                   <div className="d-flex justify-content-between">
                    
                   <span>🧡Orange</span>
                   <span>(30)</span>

                  </div>
                  
                   <div className="d-flex justify-content-between">
                    
                   <span>💛Yellow</span>
                   <span>(20)</span>

                  </div>
                  
                   <div className="d-flex justify-content-between">
                    
                   <span>🤎Brown</span>
                   <span>(26)</span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CARDS */}
            
















       </div>
    </>
  );
}

export default Shop;
