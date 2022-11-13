import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QR Generator header', () => {
  render(<App />);
  const headerElement = screen.getByText(/QR Generator/i);
  expect(headerElement).toBeInTheDocument();
});
