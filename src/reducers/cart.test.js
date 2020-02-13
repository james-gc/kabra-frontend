import reducer from "./cart";

import * as types from "../actions/types";

const sampleCartItems = [
  {
    id: 1,
    name: "ABC-1",
    description: "abc description - 1",
    image: "https://www.sampl.image.url/abc.jpg",
    price: 100
  },
  {
    id: 2,
    name: "DEF-2",
    description: "DEF description - 2",
    image: "https://www.sampl.image.url/def.jpg",
    price: 200
  },
  {
    id: 3,
    name: "PQR-3",
    description: "PQR description - 3",
    image: "https://www.sampl.image.url/pqr.jpg",
    price: 300
  }
];
describe("Cart reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle  ADD_TO_CART", () => {
    expect(
      reducer([], {
        type: types.ADD_TO_CART,
        product: {
          id: 1,
          name: "ABC-1",
          description: "abc description - 1",
          image: "https://www.sampl.image.url/abc.jpg",
          price: 100
        }
      })
    ).toEqual([
      {
        id: 1,
        name: "ABC-1",
        description: "abc description - 1",
        image: "https://www.sampl.image.url/abc.jpg",
        price: 100,
        qty: 1
      }
    ]);
  });

  it("should handle  REMOVE_FROM_CART", () => {
    expect(
      reducer(sampleCartItems, { type: types.REMOVE_FROM_CART, index: 1 })
    ).toEqual([
      {
        id: 1,
        name: "ABC-1",
        description: "abc description - 1",
        image: "https://www.sampl.image.url/abc.jpg",
        price: 100
      },
      {
        id: 3,
        name: "PQR-3",
        description: "PQR description - 3",
        image: "https://www.sampl.image.url/pqr.jpg",
        price: 300
      }
    ]);
  });

  it("should handle  UPDATE_CART_ITEM_QUANTITY INCREASING 1", () => {
    expect(
      reducer(
        [{
          id: 1,
          name: "ABC-1",
          description: "abc description - 1",
          image: "https://www.sampl.image.url/abc.jpg",
          price: 100,
          qty: 1
        }],
        {
          type: types.UPDATE_CART_ITEM_QUANTITY,
          index: 0,
          operation: "increase"
        }
      )
    ).toEqual([
      {
        id: 1,
        name: "ABC-1",
        description: "abc description - 1",
        image: "https://www.sampl.image.url/abc.jpg",
        price: 100,
        qty: 2
      }
    ]);
  });
  it("should handle  UPDATE_CART_ITEM_QUANTITY DECREASING 1", () => {
    expect(
      reducer(
        [{
          id: 1,
          name: "ABC-1",
          description: "abc description - 1",
          image: "https://www.sampl.image.url/abc.jpg",
          price: 100,
          qty: 2
        }],
        {
          type: types.UPDATE_CART_ITEM_QUANTITY,
          index: 0,
          operation: "decrease"
        }
      )
    ).toEqual([
      {
        id: 1,
        name: "ABC-1",
        description: "abc description - 1",
        image: "https://www.sampl.image.url/abc.jpg",
        price: 100,
        qty: 1
      }
    ]);
  });

});
