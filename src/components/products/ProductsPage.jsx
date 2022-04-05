import { useEffect, useState } from "react";
import { CardProduct } from "./CardProduct";
import baseUrl from "../../api";
export const ProductsPage = () => {
  // const products = [1,2,3,11,21,31,12,22,32];

  const [products, setChildProduct] = useState([]);
  const cartQuantityStorage = localStorage.getItem("cartQuantity");
  const [childData, setChildData] = useState(cartQuantityStorage);

  const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(localCart);

  useEffect(() => {
    console.log("Hello-dany");
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await baseUrl.get("/api/products/");
      setChildProduct(data);
    }

    fetchProducts();
  }, []);

  const handleCartClick = () => {
    if (childData > 0) {
      const products = JSON.parse(localStorage.getItem('cart'));
      console.log(products);
      const { data } = baseUrl
        .post("/api/invoice/", {
          customer_id: 1,
          products: products,
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
      console.log(data, "-----'");

      console.log(childData);
    }
  };

  const renderedProducts = products.map((product, index) => (
    <CardProduct
      key={product.name}
      passProduct={products[index]}
      passChildData={setChildData}
      cart={cart}
      setCart={setCart}
    />
  ));

  return (
    <>
      <div>
        <h1 className="text text-secondary text-center">Products </h1>
        <hr className="bg-dark border-1 border-top border-dark"></hr>
      </div>
      {/* <a
        href=""
        className="btn btn-outline-primary text-center btn-block d-flex justify-content-center"
      >

        <span className="mr-2">Insertar Nuevo Producto <strong>+</strong></span>
        <i className="fas fa-plus-square"></i>
      </a> */}
      <hr className="bg-dark border-1 border-top border-dark"></hr>
      <div className="row justify-content-around align-self-center">
        <button
          className="btn btn-info col-10 col-md-4 rounded-pill align-self-center"
          onClick={handleCartClick}
        >
          <h1 className="mx-2 mt-1 text-light">
            {" "}
            <img
              src="assets/images/cart.png"
              className="mx-2"
              alt="cart"
              width="50"
              height="40"
            />
            <span className="cartNumber text-light text-lg">
              <strong className="align-self-center">{childData}</strong>
            </span>
          </h1>
          {/* */}
        </button>
      </div>

      <div className="row justify-content-around card-group">
        {renderedProducts}
      </div>
    </>
  );
};
