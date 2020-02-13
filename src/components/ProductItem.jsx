import React from "react";
// import PropTypes from 'prop-types'
import { Row, Col, Button, Img } from "@bootstrap-styled/v4";

function ProductItem({ product, onAddToCartClick }) {
  const { name, description, image, price } = product;
  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Img thumbnail alt={description} src={image} />
          </Col>
        </Row>
        <Row>
          <Col>{name}</Col>
          <Col>
            <Button onClick={onAddToCartClick}>Rs.{price}/- Add To Cart</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

ProductItem.defaultProps = {
  product: {
    name: "",
    description: "",
    image: "",
    price: 0
  }
};

// ProductItem.propTypes = {

// }

export default ProductItem;
