import React, { useEffect } from "react";
import { connect } from "react-redux";

import _map from "lodash/map";

import { Row, Col } from "@bootstrap-styled/v4";

import CartItem from "../components/CartItem";

import { fetchCartItems } from "../actions/cart";

function CartPage(props) {
  useEffect(() => {
    console.log("CartPage :: props ::", props);
    props.fetchCartItems();
    // return () => {
    //   cleanup
    // };
  }, []);

  function onQuantityIncremented(item) {
    console.log("onQuantityIncremented :: ", item);
    // props.onCartItemUpdate();
  }
  function onQuantityDecremented(item) {
    console.log("onQuantityDecremented :: ", item);
    // props.onCartItemUpdate();
  }
  function onRemoved(item) {
    console.log("onRemoved :: ", item);
    // props.onCartItemUpdate();
  }

  const { cartItems } = props;

  return (
    <>
      {_map(cartItems, (item,) => (
        <Row key={item.id}>
          <Col xs={12}>
            <CartItem
              item={item}
              onQuantityIncremented={() => onQuantityIncremented(item)}
              onQuantityDecremented={() => onQuantityDecremented(item)}
              onRemoved={() => onRemoved(item)}
            />
          </Col>
        </Row>
      ))}
    </>
  );
}

const mapState = state => ({
  cartItems: state.cart
});

const mapDispatch = {
  fetchCartItems
  //   onCartItemUpdate
};

export default connect(mapState, mapDispatch)(CartPage);
