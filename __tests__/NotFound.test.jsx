import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../src/app/not-found';

describe('NotFound Component', () => {
  test('renders page not found message', () => {
    const { getByText } = render(<NotFound />);
    const headingElement = getByText(/Page not found/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders resource not found message', () => {
    const { getByText } = render(<NotFound />);
    const paragraphElement = getByText(/Could not find requsted resourse/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test('renders not found wrapper', () => {
    const { getByTestId } = render(<NotFound />);
    const wrapperElement = getByTestId('not-found-wrapper');
    expect(wrapperElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(
      <NotFound />
    );
    expect(container).toMatchSnapshot();
  });
});
