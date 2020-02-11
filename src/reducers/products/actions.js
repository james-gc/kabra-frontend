// index.js

import { FETCH_PRODUCTS } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/products';

export const fetchData = (data) => {
  return {
    type: FETCH_PRODUCTS,
    data
  }
};

export const fetchProducts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};