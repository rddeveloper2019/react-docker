import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('must crush', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(8).toEqual(10);
});
