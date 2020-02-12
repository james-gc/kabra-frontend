import { FETCH_CART_ITEMS, ADD_TO_CART } from "../actions/types";

export default function addToCart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return action.product;
    case FETCH_CART_ITEMS:
      return action.cartItems;
    default:
      return state;
  }
}
