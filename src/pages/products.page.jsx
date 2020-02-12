import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col } from "@bootstrap-styled/v4";
import _map from "lodash/map";

import ProductItem from "../components/ProductItem";

import { fetchProducts } from "../actions/products";
import { addToCart } from "../actions/cart";

function ProductsPage(props) {
  useEffect(() => {
    console.log('props', props)
    props.fetchProducts();
    // return () => {
    //   cleanup
    // };
  }, [  ]);

  function onAddToCartClick(product) {
    console.log("product to be added in the cart :: ", product);
    props.addToCart(product);
  }

  const { products } = props;

  return (
    <Row>
      {_map(products, (product, i) => (
        <Col key={i} lg={6} md={6}>
          <ProductItem
            product={product}
            onAddToCartClick={() => onAddToCartClick(product)}
          />
        </Col>
      ))}
    </Row>
  );
}

const mapState = state => ({
  products: state.products
});

const mapDispatch = {
  fetchProducts,
  addToCart
};

export default connect(mapState, mapDispatch)(ProductsPage);
