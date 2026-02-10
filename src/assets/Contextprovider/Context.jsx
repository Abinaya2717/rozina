import React, { useState } from "react";
import Mycontext from "./Mycontext";
import products from "../Products";

function Context({ children }) {
  var [cartState, setCartState] = useState([]);
  console.log("cartState", cartState);

  function addtocart(proId) {
    const exists = cartState.some((item) => item.id === proId);

    if (exists) {
      alert("Already in cart");
    } else {
      const product = products.find((v) => v.id === proId);
      setCartState([...cartState, product]);
      alert("Product added to cart");
    }
  }

  // cart remove function start
  function removeCart(proId) {
    setCartState(cartState.filter((v) => v.id !== proId));
  }
  // cart remove function end

  function searchFun(e) {
    e.preventDefault();
  }

  var [searchOutput, setSearchoutput] = useState([]);
  console.log("searchOutput", searchOutput);

  function input(e) {
    console.log(e.target.value);
    var serachData = e.target.value;
    setSearchoutput(
      products.filter(
        (v) =>
          v.Name.toLowerCase().includes(serachData.toLowerCase()) ||
          v.price.toLowerCase().includes(serachData.toLowerCase()),
      ),
    );
  }

  const abi_developer = {
    addtocart,
    searchFun,
    input,
    searchOutput,
    cartState,
    removeCart,
  };
  return (
    <Mycontext.Provider value={abi_developer}>{children}</Mycontext.Provider>
  );
}

export default Context;
