import React from "react";
import { Row, Col } from "@bootstrap-styled/v4";
import _map from "lodash/map";

import ProductItem from "../components/ProductItem";

const products = [
  {
    name: "ABC",
    description: "abc description",
    image: "https://laksdjf.jpg",
    price: 200.32
  },
  {
    name: "ABC",
    description: "abc description",
    image: "https://laksdjf.jpg",
    price: 200.32
  },
  {
    name: "ABC",
    description: "abc description",
    image: "https://laksdjf.jpg",
    price: 200.32
  },
  {
    name: "ABC",
    description: "abc description",
    image: "https://laksdjf.jpg",
    price: 200.32
  },
  {
    name: "ABC",
    description: "abc description",
    image: "https://laksdjf.jpg",
    price: 200.32
  },
  {
    name: "ABC",
    description: "abc description",
    image: "https://laksdjf.jpg",
    price: 200.32
  }
];

export default function ProductPublicList() {
  return (
    <Row>
      {_map(products, (product,i) => (
        <Col key={i} lg={6} md={6}>
          <ProductItem {...product} />
        </Col>
      ))}
    </Row>
  );
}
