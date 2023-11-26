import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, preCartItems } from "../redux/actions/actions";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menue, setMenue] = useState(true);
  const cartItemsData = useSelector((state) => state.cartItems.cartItems);

  useEffect(() => {
    fetch("https://ecomerce-api-8lpr.onrender.com/products").then((responce) => {
      responce.json().then((results) => {
        dispatch(getProductsData(results));
      });
    });
  }, [dispatch]);


  useEffect(() => {
    fetch("https://ecomerce-api-8lpr.onrender.com/CartList").then((responce) => {
      responce.json().then((res) => {
        if (Array.isArray(res) && res.length > 0) {
          dispatch(preCartItems(res));
        }
      });
    });
  }, []);

  const logOut = () => {
    localStorage.clear();
    navigate("./login");
  };

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <h1 className="heading-h1">
          Shop.<span className="heading-span">me</span>
        </h1>
        <ul id="navbar" className={menue ? "#navbar" : "#navbar active"}>
          <li>
            <NavLink to={"/"} className={"listItems"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"} className={"listItems"}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to={"/addproducts"} className={"listItems"}>
              Add Products
            </NavLink>
          </li>
          <li>
            {localStorage.getItem("login") ? (
              <button className="login-btn listItems" onClick={() => logOut()}>
                Logout
              </button>
            ) : (
              <button
                className="login-btn listItems"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
          </li>
          <li>
            <div className="shoping-cart-div">
              <ShoppingCartIcon
                className="shop-icon"
                onClick={() => navigate("/cartitems")}
              />
              {cartItemsData.length !== 0 ? (
                <p className="cartCounter">{cartItemsData.length}</p>
              ) : (
                ""
              )}
            </div>
          </li>
        </ul>
        <div className="mobile-icons">
          <div className="mobile-inner">
            <div className="shoping-cart-div-mobile">
              <ShoppingCartIcon
                className="shop-icon"
                onClick={() => navigate("/cartitems")}
              />
              {cartItemsData.length !== 0 ? (
                <p className="cartCounter">{cartItemsData.length}</p>
              ) : (
                ""
              )}
            </div>
            {menue ? (
              <MenuIcon onClick={() => setMenue(false)} />
            ) : (
              <CloseIcon onClick={() => setMenue(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
