import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("", { replace: true });
  };

  const getCartQuantity=()=>{
    return localStorage.getItem("cartQuantity");
  }

  return (
    <nav className="navbar navbar-expand-md  fixed-top py-1 p-lg-3 header-nav text-white header-nav-image navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent2"
        aria-controls="navbarSupportedContent2"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div></div>

      <span className="navbar-brand text-warning mx-2 md-mx-5" >
        InvoiceSys
      </span>

      <div className="collapse navbar-collapse" id="navbarSupportedContent2">
        <div className="navbar-nav ">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link d-flex justify-content-center justify-content-md-start" + (isActive ? "active" : "")
            }
            to="/customers"
          >
            customers
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link d-flex justify-content-center justify-content-md-start" + (isActive ? "active" : "")
            }
            to="/products"
          >
            products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link d-flex justify-content-center justify-content-md-start" + (isActive ? "active" : "")
            }
            to="/invoices"
          >
            Invoices
          </NavLink>
        </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex  justify-content-center justify-content-md-end ">
        <ul className="navbar-nav ml-auto">
          <span className="nav-iten nav-link text-info">Dany</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
      </div>

    </nav>
  );
};
