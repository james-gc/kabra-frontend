import React from "react";
// import PropTypes from 'prop-types'
import { Row, Col, Button, Img } from "@bootstrap-styled/v4";
import styled from "styled-components";

const BorderedRow = styled(Row)`
  border: 1px dashed red;
  margin-bottom: 10px;
`;

const CenteredAlignCol = styled(Col)`
  margin-top: auto;
  margin-bottom: auto;
`;

function CartItem({
  item,
  onQuantityIncremented,
  onQuantityDecremented,
  onRemoved
}) {
  const { id, name, description, image, price, qty } = item;
  return (
    <BorderedRow>
      <CenteredAlignCol sm={2}>
        <Img thumbnail alt={description} src={image} />
      </CenteredAlignCol>
      <CenteredAlignCol sm={6}>{name}</CenteredAlignCol>
      <CenteredAlignCol sm={2}>
        <Button onClick={onQuantityIncremented}>+</Button>
        {qty}
        <Button onClick={onQuantityDecremented}>-</Button>
      </CenteredAlignCol>
      <CenteredAlignCol sm={2}>
        {price*qty}
        <Button onClick={onRemoved}>Remove</Button>
      </CenteredAlignCol>
    </BorderedRow>
  );
}

// CartItem.propTypes = {

// }

export default CartItem;
