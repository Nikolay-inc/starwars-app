import { render } from '@testing-library/react';
import Header from '../src/components/Footer';

describe('Header component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Header />);
    const headerElement = getByText('StarWars');
    expect(headerElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
