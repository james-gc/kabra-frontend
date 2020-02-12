import produce from "immer";

import {
  // FETCH_CART_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM_QUANTITY
} from "../actions/types";

export default function addToCart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return produce(state, draftState => {
        draftState.push({ ...action.product, qty: 1 });
      });
    case REMOVE_FROM_CART:
      return produce(state, draftState => {
        draftState.splice(action.index, 1);
      });
    case UPDATE_CART_ITEM_QUANTITY:
      return produce(state, draftState => {
        const prevValue = draftState[action.index].qty;
        console.log("prev value draftState", draftState, prevValue);
        const newValue=action.operation === "increase" ? prevValue + 1 : prevValue - 1;

        if (newValue > 0) {
          draftState[action.index].qty = newValue;
        }
      });
    // case FETCH_CART_ITEMS:
    //   return action.cartItems;
    default:
      return state;
  }
}
