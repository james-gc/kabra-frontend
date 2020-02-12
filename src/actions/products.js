// index.js

import { FETCH_PRODUCTS } from './types';
// import axios from 'axios';

// const apiUrl = 'http://localhost:8080/api/products';

export const fetchData = (data) => {
  return {
    type: FETCH_PRODUCTS,
    data
  }
};

export const fetchProducts = () => {
  return (dispatch) => {
      dispatch(fetchData(sampleProducts));
    // return axios.get(apiUrl)
    //   .then(response => {
    //     dispatch(fetchData(response.data))
    //   })
    //   .catch(error => {
    //     throw(error);
    //   });
  };
};



const img200x200 =
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_159ca0ce019%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_159ca0ce019%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2275.5%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
const sampleProducts = [
  {
    id: 1,
    name: "ABC-1",
    description: "abc description - 1",
    image: img200x200,
    price: 100
  },
  {
    id: 2,
    name: "ABC-2",
    description: "abc description - 2",
    image: img200x200,
    price: 200
  },
  {
    id: 3,
    name: "ABC-3",
    description: "abc description - 3",
    image: img200x200,
    price: 300
  },
  {
    id: 4,
    name: "ABC-4",
    description: "abc description - 4",
    image: img200x200,
    price: 400
  },
  {
    id: 5,
    name: "ABC-5",
    description: "abc description - 5",
    image: img200x200,
    price: 500
  },
  {
    id: 6,
    name: "ABC-6",
    description: "abc description - 6",
    image: img200x200,
    price: 600
  }
];