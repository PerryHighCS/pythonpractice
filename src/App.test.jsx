import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation buttons', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /strings/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /mixed/i })).toBeInTheDocument();
});
