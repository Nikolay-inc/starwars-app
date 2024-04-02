import { render } from '@testing-library/react';
import Footer from '../src/components/Footer';

describe('Footer component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Footer />);
    const footerElement = getByText('StarWars');
    expect(footerElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
