import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders bootstrap container', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Products/i);
  expect(linkElement).toBeInTheDocument();
});
