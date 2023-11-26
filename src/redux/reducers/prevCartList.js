import { ActionTypes } from "../constants/constants";

const cartPrevState = {
    cartItems: [],
  };
  
export default function prevCartItems(state = cartPrevState, { type, data }) {
    switch (type) {
      case ActionTypes.PREV_CART_LIST:
        return {
          ...state,
          cartItems:data,
        };
      case ActionTypes.REMOVE_ITEM:
        const updatedItems = [...state.cartItems];
        updatedItems.splice(data, 1);
        return {
          ...state,
          cartItems: updatedItems,
        };
      default:
        return state;
    }
  }