import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders the correct content', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});