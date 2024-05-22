import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders the App', () => {
    render(<App />);

    expect(screen.getByText('Fin Experiment')).toBeInTheDocument();
  });

  it.todo('renders the data from the API', () => {

  });

  it.todo('renders an error if the API call fails', () => {
  });
});
