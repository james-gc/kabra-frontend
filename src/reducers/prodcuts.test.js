import reducer from "./products";

import * as types from "../actions/types";

describe("Products reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
  it("should handle FETCH_PRODUCTS", () => {
    expect(
      reducer([], {
        type: types.FETCH_PRODUCTS,
        data: [
          {
            id: 1,
            name: "ABC-1",
            description: "abc description - 1",
            image: "https://www.sampl.image.url/abc.jpg",
            price: 100
          }
        ]
      })
    ).toEqual([
      {
        id: 1,
        name: "ABC-1",
        description: "abc description - 1",
        image: "https://www.sampl.image.url/abc.jpg",
        price: 100
      }
    ]);
  });
});
