import React, { useEffect, useState } from "react";

export const CardProduct = ({ passChildData, passProduct, cart, setCart }) => {
  const [quantity, setQuantity] = useState(1);
  // const [localCart, setLocalCart] = useState([]);

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
    // let existingItem = localCart.find((productItem)=>productItem.id===product.id);
    // if (existingItem) {
    //   existingItem.stock++;
    // }else{
    // }
    const cartQuantity = localStorage.getItem("cartQuantity");
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      const lessQuantity = itemInCart.quantity;
      console.log(lessQuantity);
      localStorage.setItem(
        "cartQuantity",
        parseInt(cartQuantity) + quantity - lessQuantity
      );
      itemInCart.quantity = +quantity;
      passChildData(parseInt(cartQuantity) + quantity - lessQuantity);
    } else {
      itemInCart = {
        ...product,
        quantity: quantity,
      };
      newCart.push(itemInCart);
      localStorage.setItem("cartQuantity", parseInt(cartQuantity) + quantity);
      passChildData(parseInt(cartQuantity) + quantity);
    }
    setCart(newCart);

    // passCart(localCart)
  }

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
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
            <h5 className="card-title text-center text-success">
              {formatter.format(passProduct.price)}
            </h5>
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
                onClick={() => {
                  addCart(passProduct);
                }}
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
