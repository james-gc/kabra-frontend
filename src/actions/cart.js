// index.js

import {
  FETCH_CART_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM_QUANTITY
} from "./types";
import {push} from "connected-react-router";
// import axios from 'axios';
// const apiUrl = 'http://localhost:8080/api/products';

export const fetchCartItemsAction = (cartItems) => {
  return {
    type: FETCH_CART_ITEMS,
    cartItems
  };
};
export const addToCartAction = product => {
  return {
    type: ADD_TO_CART,
    product
  };
};

export const removeFromCartAction = product => {
  return {
    type: REMOVE_FROM_CART,
    product
  };
};

export const updateCartItemQuantityAction = (product,qty) => {
  return {
    type: UPDATE_CART_ITEM_QUANTITY,
    product,
    qty
  };
};

export const fetchCartItems = () => {
  return (dispatch) => {
      dispatch(fetchCartItemsAction(sampleCartItems));
    // return axios.get(apiUrl)
    //   .then(response => {
    //     dispatch(fetchData(response.data))
    //   })
    //   .catch(error => {
    //     throw(error);
    //   });
  };
};


export const addToCart = product => {
  return dispatch => {
    dispatch(addToCartAction(product));
    dispatch(push('/cart'));
    // return axios.get(apiUrl)
    //   .then(response => {
    //     dispatch(fetchData(response.data))
    //   })
    //   .catch(error => {
    //     throw(error);
    //   });
  };
};

export const removeFromCart = product => {
  return dispatch => {
    dispatch(removeFromCartAction(product));
    // return axios.get(apiUrl)
    //   .then(response => {
    //     dispatch(fetchData(response.data))
    //   })
    //   .catch(error => {
    //     throw(error);
    //   });
  };
};

export const updateCartItemQuantity = (product,qty) => {
  return dispatch => {
    dispatch(updateCartItemQuantityAction(product,qty));
    // return axios.get(apiUrl)
    //   .then(response => {
    //     dispatch(fetchData(response.data))
    //   })
    //   .catch(error => {
    //     throw(error);
    //   });
  };
};


const sampleCartItems = [
  {
    id: 3,
    qty: 2,
  },
  {
    id: 5,
    qty: 3,
  },
  {
    id: 1,
    qty: 1,
  },
];