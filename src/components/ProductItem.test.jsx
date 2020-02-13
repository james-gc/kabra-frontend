import React from "react";
import { render } from '@testing-library/react';
import ProductItem from './ProductItem';

it('renders ProductItem', () => {
  const { getByText } = render(<ProductItem />);
  expect(getByText(/rs.*add to cart/i)).toBeInTheDocument();
});