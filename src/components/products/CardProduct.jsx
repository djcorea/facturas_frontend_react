import React, { useEffect, useState } from "react";

export const CardProduct = ({ passChildData, passProduct }) => {
  const [quantity, setQuantity] = useState(1);
  let [cart, setCart] = useState([])
  
  
  
  const addItem = (item)  =>   {
  
    //create a copy of our cart state, avoid overwritting existing state
    let cartCopy =  JSON.parse(localStorage.getItem("shoppingCart"));
    if (cartCopy) {
    
    //assuming we have an id field in our item
    let {id} = item;
    
    //look for item in cart array
    let existingItem = cartCopy.find(cartItem => cartItem.id == id);
    
    //if item already exists
    
    
    // cartCopy.push(item)
    
      console.log("exists");
      existingItem.stock += item.stock //update item
      console.log(existingItem);
    } else { //if item doesn't exist, simply add it
      cartCopy.push(item)
    }
    
    //update app state
    console.log(cartCopy);
    setCart(cartCopy)
    
    console.log(cart);
    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart)
    
  }
  const updateItem = (itemID, amount) => {}
  const removeItem = (itemID) => {}
  
  //this is called on component mount
  // useEffect(() => {
  //   //turn it into js
  //   console.log("here");
  //   localCart = JSON.parse(localCart);
  //   //load persisted cart into state if it exists
  //   if (localCart) setCart(localCart)
  //   console.log(cart,"-------");
    
  // }, localCart) //the empty array ensures useEffect only runs once



  // h
  // e
  // l
  // l

  const handleQuantity = (value) => {
    if (value === -1) {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    } else {
      setQuantity(quantity + 1);
    }
  };

  function addCart(product) {
    // const cartQuantity = localStorage.getItem("cartQuantity");
    // setCartArray(cartArray.push(product))
    //   console.log(cartArray);
    // console.log(localStorage.getItem("shoppingCart"));
    // // if (cartQuantity>0) {
    //   // let shoppingCart =JSON.parse(localStorage.getItem("shoppingCart"));
    //   // setCartArray(cartArray.push(shoppingCart))
    //   // console.log(JSON.stringify(cartArray));
    //   // localStorage.setItem("shoppingCart", JSON.stringify(cartArray));
      
    // // }else{
    // //   setCartArray(cartArray.push(product))
    // //   console.log(cartArray);
    // //   localStorage.setItem("shoppingCart", JSON.stringify(product));
      
    // // }
    // localStorage.setItem("cartQuantity", parseInt(cartQuantity) + quantity);
    // passChildData(parseInt(cartQuantity) + quantity);
    // console.log(cartArray);
  }

  return (
    <>
      <div className="col-12 col-md-6  col-lg-4 my-1">
        <div className="card h-100">
          <img
            className="card-img-top"
            src={passProduct.image}
            alt="Product"
            height="400"
          />
          <div className="card-body">
            <h5 className="card-title text-center">{passProduct.name}</h5>
            <p className="card-text text-muted">{passProduct.description}</p>
          </div>
          <div className="card-footer">
            <div className="row justify-content-around ">
              <div className="col-2 cursor-btn align-self-center">
                <img
                  src="assets/images/menos.png"
                  alt="dfjfkl"
                  width="30"
                  height="30"
                  onClick={() => {
                    handleQuantity(-1);
                  }}
                />
              </div>
              <div className="col-6 align-self-center">
                <input
                  readOnly
                  className="form-control border-secondary rounded-pill text-center"
                  placeholder={quantity}
                ></input>
              </div>

              <div className="col-2 cursor-btn align-self-center">
                <img
                  src="assets/images/mas.png"
                  alt="dfjfkl"
                  width="30"
                  height="30"
                  onClick={() => {
                    handleQuantity(1);
                  }}
                />
              </div>
            </div>
            <div className="row justify-content-around mt-3 mb-3 align-self-end">
              <button
                className="btb btn-primary col-8 col-md-12 col-lg-8  rounded-pill cursor-btn align-self-center"
                onClick={()=>{addItem(passProduct)}}
              >
                <img
                  src="assets/images/cart.png"
                  alt="cart"
                  width="20"
                  className="mx-2"
                />
                Agregar al carrito {quantity}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
