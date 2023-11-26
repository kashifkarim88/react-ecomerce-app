import { combineReducers } from "redux";
import productsData from "./reducer";
import cartItems from "./currentList";
import prevCartItems from "./prevCartList";


export default combineReducers({
    productsData,
    cartItems,
    prevCartItems
})