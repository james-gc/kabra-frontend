import React from "react";
import { Row, Col } from "@bootstrap-styled/v4";
import ProductItem from "../components/ProductItem";

export default function ProductPublicList() {
  return (
    <Row>
      <Col lg={6} md={2}>
        <ProductItem />
      </Col>
      <Col lg={6} md={2}>
        <ProductItem />
      </Col>
      <Col lg={6} md={2}>
        <ProductItem />
      </Col>
      <Col lg={6} md={2}>
        <ProductItem />
      </Col>
    </Row>
  );
}
