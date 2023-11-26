import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Products.css";
import { currentCartItems } from "../redux/actions/actions";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Products() {
  const dispatch = useDispatch();

  function addToCart(data) {
    dispatch(currentCartItems(data));
    fetch('https://ecomerce-api-8lpr.onrender.com/CartList',{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(data)
    }).then((responce)=>{
      responce.json().then((results)=>{
        console.log(results)
      })
    })
  }

  const products = useSelector((state) => state.productsData.productsData);
  return (
    <div className="outer-wrapper">
      <h1>Products</h1>
      <div className="inner-wrapper">
        {products.map((data, index) => (
          <div className="product" key={index}>
            <div className="image-div">
              {data.imageSrcList !== null ? (
                <img className="product-image" src={data.imageSrcList[0]} alt="" />
              ) : (
                "No images Found"
              )}
              <div className="text-div">
                <p className="details">{data.name}</p>
                <p className="details">{data.description}</p>
                <p className="details">Rs/- {data.price}</p>
                <AddShoppingCartIcon
                  className="cart-btn"
                  onClick={() => addToCart(data)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
