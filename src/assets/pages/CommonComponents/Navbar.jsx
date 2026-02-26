import React, { useContext } from "react";
import "../../Styles/Nav.css";
// import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Mycontext from "../../Contextprovider/Mycontext";

function Navbar() {
  const navigate = useNavigate();

  var {
    searchFun,
    input,
    searchOutput,
    cartState,
    removeCart,
    wishstate,
    removewish,
  } = useContext(Mycontext);
  return (
    <div>
      <nav className="position-sticky top-0 z-3">
        <div className="small-nav bg-secondary ">
          <marquee behaviour="scroll" scrollamount="10" scrolldelay="10">
            ROZINA Sale is LIVE! Enjoy Min 30% OFF on your favourites | Shop
            now! T&C Apply
          </marquee>
        </div>
        <div className="d-lg-none d-flex justify-content-between align-items-center px-3 ">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/shopping-bag.png"
            alt="shopping-bag"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
          />

          <div>
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/windows/32/1A1A1A/huawei-logo.png"
              alt="huawei-logo"
            />
            {/* <img src={logo} height="60px" /> */}
          </div>
        </div>

       
         <div className="navbar1 d-flex justify-content-between" >
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvas"
            aria-labelledby="offcanvasLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title"></h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <button className="btn border-0 " data-bs-dismiss="offcanvas">
                <Link to={"/"} className="text-decoration-none">
                  Home
                </Link>
              </button>
              <br />
              <button className="btn  border-0" data-bs-dismiss="offcanvas">
                <Link to={"/shop"} className="text-decoration-none">
                  Shop
                </Link>
              </button>
              <br />
              <button className="btn border-0" data-bs-dismiss="offcanvas">
                <Link
                  to={"/contact"}
                  className="text-decoration-none text-dark"
                >
                  Contact
                </Link>
              </button>
            </div>
          </div>
          {/* main nav start */}
          <div
            className="d-lg-flex justify-content-between  align-items-center d-none w-100"
            style={{ height: "70px" }}
          >
            <div
              className=" d-flex justify-content-between p-5 align-items-center text-light "
              style={{ width: "300px" }}
            >
              <span onClick={() => navigate("/")} className="home">
                HOME
              </span>
              <span class="dropdown">
                <button
                  class="btn  dropdown-toggle text-light"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="shop-button"
                 
                >
                  SHOP
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" onClick={() => navigate("/Women")}>
                      Womens Collections
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={() => navigate("/Men")}>
                      Mens Collections
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={() => navigate("/Kid")}>
                      Kids Collections
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={() => navigate("/Bag")}>
                      Bags Collections
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={() => navigate("/Jewel")}>
                      Jewel Collections
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={() => navigate("/Watch")}>
                      Watches Collections
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      onClick={() => navigate("/Skincare")}
                    >
                      Skincare Collections
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={() => navigate("/Toys")}>
                      Toys Collections
                    </a>
                  </li>
                </ul>
              </span>
              <span onClick={() => navigate("/Contact")} className="contact">
                CONTACT
              </span>
            </div>
            {/* <input type="text" className="bg-transparent input" style={{width:"400px"}}/> */}
            <form class="form">
              <label for="search">
                <input
                  class="input"
                  type="text"
                  required=""
                  placeholder="Search "
                  id="search"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas3"
                  data-bs-dismiss
                />
                <div class="fancy-bg"></div>
                <div class="search">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
                  >
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                </div>
              </label>
            </form>
            {/* offcanvas input */}
            <div
              class="offcanvas offcanvas-top"
              // tabindex="-1"
              id="offcanvas3"
              aria-labelledby="offcanvasLabel"
              style={{ height: "600px", overflow: "scroll" }}
            >
              <div class="offcanvas-header">
                <br />
                <form className="input-group" onSubmit={searchFun}>
                  <input
                    type="search"
                    className="form form-control"
                    onChange={input}
                  />
                  <button className="btn btn-primary">submit</button>
                  <button
                    className=" btn btn-close"
                    data-bs-dismiss="offcanvas"
                  ></button>
                </form>
              </div>
              <div className="container">
                <div className="row ">
                  {" "}
                  {searchOutput.length == 0 ? (
                    <h1>no products</h1>
                  ) : (
                    searchOutput.map((v, i) => (
                      <div className="col-lg-3 col-md-6 col-12 my-3">
                        <div className="card" id="searchData">
                          <img src={v.img} height="200px" alt="" />
                          <div className="card-body">
                            <span>{v.Name}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
            <div
              className="  d-lg-flex justify-content-between d-none"
              style={{ width: "200px" }}
            >
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/user--v1.png"
                alt="user--v1"
                onClick={() => navigate("/Login")}
              />
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-cart.png"
                alt="shopping-cart"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas2"
                data-bs-dismiss
              />
              {/* offcanvass cart */}
              
              <div
                class="offcanvas offcanvas-top"
                tabindex="-1"
                id="offcanvas2"
                aria-labelledby="offcanvasLabel"
                style={{ height: "600px", overflow: "scroll" }}
              >
                <div class="offcanvas-header bg-light border-bottom">
                  <h5 class="offcanvas-title fw-bold" id="offcanvasLabel">
                    Cartlist
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div class="offcanvas-body p-0">
                  {cartState.length == 0 ? (
                    <div class="d-flex flex-column align-items-center justify-content-center py-5">
                      <div class="text-muted mb-3">
                        <i class="bi bi-heart fs-1"></i>
                      </div>
                      <h5 class="text-muted mb-2">Your Cartlist is empty</h5>
                      <p class="text-muted small">
                        Add some products to your Cartlist
                      </p>
                    </div>
                  ) : (
                    <div class="table-responsive">
                      <table className="table table-hover align-middle mb-0">
                        <thead class="table-light">
                          <tr>
                            <th scope="col" class="ps-4">
                              Product
                            </th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Category</th>
                            <th scope="col" class="text-end pe-4">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartState.map((v, i) => (
                            <tr key={i} class="border-bottom">
                              <td class="ps-4">
                                <div class="d-flex align-items-center">
                                  <img
                                    src={v.img}
                                    width="60"
                                    height="60"
                                    class="rounded border object-fit-cover"
                                    alt={v.Name}
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="fw-medium">{v.Name}</div>
                              </td>
                              <td>
                                <span class="fw-semibold text-primary">
                                  {v.price}
                                </span>
                              </td>
                              <td>
                                <span class="badge bg-secondary rounded-pill">
                                  {v.Quantity}
                                </span>
                              </td>
                              <td>
                                <span class="badge bg-light text-dark border">
                                  {v.Category}
                                </span>
                              </td>
                              <td class="text-end pe-4">
                                <button
                                  className="btn btn-close btn-sm btn-outline-danger rounded-circle"
                                  onClick={() => removeCart(v.id)}
                                  title="Remove from Cartlist"
                                ></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {/* Optional: Add a footer with actions */}
                      <div class="border-top p-3 bg-light">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="fw-medium">
                            Total Items:{" "}
                            <span class="badge bg-primary">
                              {wishstate.length}
                            </span>
                          </div>
                          <div>
                            <button
                              className="btn btn-outline-secondary btn-sm me-2"
                              onClick={() => {
                                /* Add clear all function here */
                              }}
                            >
                              Clear All
                            </button>
                            <button className="btn btn-primary btn-sm">
                              View All Products
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* wishlist */}
                <img
                width="24"
                height="24"
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/like--v1.png"
                alt="like--v1"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas1"
                data-bs-dismiss
              />
              
              <div
                class="offcanvas offcanvas-top"
                tabindex="-1"
                id="offcanvas1"
                aria-labelledby="offcanvasLabel"
                style={{ height: "600px", overflow: "scroll" }}
              >
                <div class="offcanvas-header bg-light border-bottom">
                  <h5 class="offcanvas-title fw-bold" id="offcanvasLabel">
                    Wishlist
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div class="offcanvas-body p-0">
                  {wishstate.length == 0 ? (
                    <div class="d-flex flex-column align-items-center justify-content-center py-5">
                      <div class="text-muted mb-3">
                        <i class="bi bi-heart fs-1"></i>
                      </div>
                      <h5 class="text-muted mb-2">Your wishlist is empty</h5>
                      <p class="text-muted small">
                        Add some products to your wishlist
                      </p>
                    </div>
                  ) : (
                    <div class="table-responsive">
                      <table className="table table-hover align-middle mb-0">
                        <thead class="table-light">
                          <tr>
                            <th scope="col" class="ps-4">
                              Product
                            </th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Category</th>
                            <th scope="col" class="text-end pe-4">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {wishstate.map((v, i) => (
                            <tr key={i} class="border-bottom">
                              <td class="ps-4">
                                <div class="d-flex align-items-center">
                                  <img
                                    src={v.img}
                                    width="60"
                                    height="60"
                                    class="rounded border object-fit-cover"
                                    alt={v.Name}
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="fw-medium">{v.Name}</div>
                              </td>
                              <td>
                                <span class="fw-semibold text-primary">
                                  ${v.price}
                                </span>
                              </td>
                              <td>
                                <span class="badge bg-secondary rounded-pill">
                                  {v.Quantity}
                                </span>
                              </td>
                              <td>
                                <span class="badge bg-light text-dark border">
                                  {v.Category}
                                </span>
                              </td>
                              <td class="text-end pe-4">
                                <button
                                  className="btn btn-close btn-sm btn-outline-danger rounded-circle"
                                  onClick={() => removewish(v.id)}
                                  title="Remove from wishlist"
                                ></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {/* Optional: Add a footer with actions */}
                      <div class="border-top p-3 bg-light">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="fw-medium">
                            Total Items:{" "}
                            <span class="badge bg-primary">
                              {wishstate.length}
                            </span>
                          </div>
                          <div>
                            <button
                              className="btn btn-outline-secondary btn-sm me-2"
                              onClick={() => {
                                /* Add clear all function here */
                              }}
                            >
                              Clear All
                            </button>
                            <button className="btn btn-primary btn-sm">
                              View All Products
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </nav>
    </div>
  );
}

export default Navbar;
