import React from "react";
import { connect } from "react-redux";

import _map from "lodash/map";

import { Row, Col } from "@bootstrap-styled/v4";

import CartItem from "../components/CartItem";

import { updateCartItemQuantity, removeFromCart } from "../actions/cart";

function CartPage(props) {
  // useEffect(() => {
  //   console.log("CartPage :: props ::", props);
  //   props.fetchCartItems();
  //   // return () => {
  //   //   cleanup
  //   // };
  // }, []);

  const { cartItems, updateCartItemQuantity, removeFromCart } = props;

  // console.log('CartPage :: ',props );

  return (
    <>
      {_map(cartItems, (item,index) => (
        <Row key={item.id}>
          <Col xs={12}>
            <CartItem
              item={item}
              onQuantityIncremented={() => updateCartItemQuantity(index,"increase")}
              onQuantityDecremented={() => updateCartItemQuantity(index,"decrease")}
              onRemoved={() => removeFromCart(index)}
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
  updateCartItemQuantity,
  removeFromCart
  // fetchCartItems
  //   onCartItemUpdate
};

export default connect(mapState, mapDispatch)(CartPage);
