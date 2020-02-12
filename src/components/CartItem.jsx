import React from "react";
// import PropTypes from 'prop-types'
import { Row, Col, Button, Img } from "@bootstrap-styled/v4";
import styled from "styled-components";
const img200x200 =
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_159ca0ce019%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_159ca0ce019%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2275.5%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

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
  const { id, qty } = item;
  return (
    <BorderedRow>
      <CenteredAlignCol sm={2}>
        <Img thumbnail alt={id} src={img200x200} />
      </CenteredAlignCol>
      <CenteredAlignCol sm={6}>Product Name</CenteredAlignCol>
      <CenteredAlignCol sm={2}>
        <Button onClick={onQuantityIncremented}>+</Button>
        {qty}
        <Button onClick={onQuantityDecremented}>-</Button>
      </CenteredAlignCol>
      <CenteredAlignCol sm={2}>
        10
        <Button onClick={onRemoved}>Remove</Button>
      </CenteredAlignCol>
    </BorderedRow>
  );
}

// CartItem.propTypes = {

// }

export default CartItem;
