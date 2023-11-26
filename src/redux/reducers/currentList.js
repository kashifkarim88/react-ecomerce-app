import { ActionTypes } from "../constants/constants";

const cartcurrentState = {
  cartItems: [],
};
export default function cartItems(state = cartcurrentState, { type, data }) {
  switch (type) {
    case ActionTypes.CURRENT_CART_LIST:
      return {
        ...state,
        cartItems: [...state.cartItems, data],
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
