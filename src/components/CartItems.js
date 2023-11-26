import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/CartItem.css";
import CloseIcon from "@mui/icons-material/Close";
import { removeCartItems } from "../redux/actions/actions";

function CartItems() {
  const dispatch = useDispatch();
  let cartItemsData = useSelector((state) => state.cartItems.cartItems);
  const PreCartItemsData = useSelector(
    (state) => state.prevCartItems.cartItems
  );

  const removeItem = (id,idx) => {
    fetch(`https://ecomerce-api-8lpr.onrender.com/CartList/${id}`,{
    method: 'DELETE',
    }).then((response) => {
      response.json().then(()=>{
        alert('data deleted successfully')
        removeItems(idx)
      })
    });
  }

  const removeItems = (i) => {
    dispatch(removeCartItems(i));
  };

  return (
    <div className="cart-main-div">
      <h1>Cart List</h1>
      <div className="cart-outer-div">
        {cartItemsData.length !== 0 ? (
          <div className="cart-inner-div">
            {cartItemsData.map((data, index) => (
              <div className="cart-item-card" key={index}>
                <CloseIcon
                  className="close-btn"
                  onClick={() => removeItems(data.id)}
                />
                <div className="image-view-div">
                  <img src={data.imageSrcList[0]} alt="" />
                </div>
                <div className="cart-item-text">
                  <p className="">{data.name}</p>
                  <p>{data.description}</p>
                  <p>Rs/- {data.price}</p>
                </div>
                <button className="place-order-btn">Order Now</button>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="cart-outer-div">
        {PreCartItemsData.length !== 0 ? (
          <div className="cart-inner-div">
            {PreCartItemsData.map((data, index) => (
              <div className="cart-item-card" key={index}>
                <CloseIcon
                  className="close-btn"
                  onClick={() => removeItem(data.id,index)}
                />
                <div className="image-view-div">
                  <img src={data.imageSrcList[0]} alt="" />
                </div>
                <div className="cart-item-text">
                  <p>{data.name}</p>
                  <p>{data.description}</p>
                  <p>Rs/- {data.price}</p>
                </div>
                <button className="place-order-btn">Order Now</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No cart items found</p>
        )}
      </div>
    </div>
  );
}

export default CartItems;
