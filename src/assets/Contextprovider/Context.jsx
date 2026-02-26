import React, { useState } from "react";
import Mycontext from "./Mycontext";
import products from "../Products";

function Context({ children }) {
  var [cartState, setCartState] = useState([]);
  var [wishstate,setwishstate]=useState([])
  console.log("cartState", cartState);
  console.log("wishstate", wishstate);

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
   function Wishlist(proId) {
     const product = products.find((v) => v.id === proId);
    const exists = wishstate.some((item) => item.id === proId);

    if (exists) {
      alert("Already in wishlist");
    } else {
      setwishstate([...wishstate, product]);
      alert("Product added to wishlist");
    }
  }

  // cart remove function start
  function removeCart(proId) {
    setCartState(cartState.filter((v) => v.id !== proId));
  }
  // wish remove function
  function removewish(proId) {
    setwishstate(wishstate.filter((v) => v.id !== proId));
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
    Wishlist,
    wishstate,
    removewish
    
  };
  return (
    <Mycontext.Provider value={abi_developer}>{children}</Mycontext.Provider>
  );
}

export default Context;
