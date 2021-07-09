import { render, screen } from '@testing-library/react';
import App from './App';

test('search bar rendered successfully', () => {
  render(<App />);
  const searchBar = screen.getByTestId("search-bar");
  expect(searchBar).toBeInTheDocument();
});

test('search bar focus implemented correctly', () => {
  render(<App />);
  const searchBar = screen.getByTestId("search-bar");
  expect(searchBar).toHaveFocus();
});
