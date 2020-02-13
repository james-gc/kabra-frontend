import React from "react";
import { render } from '@testing-library/react';
import CartItem from './CartItem';

it('renders CartItem', () => {
  const { getByText } = render(<CartItem />);
  expect(getByText(/\+/i)).toBeInTheDocument();
});