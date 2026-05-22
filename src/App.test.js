import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Todo List UI', () => {
  render(<App />);

  expect(screen.getByText(/todo list/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/type your todo/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
});

