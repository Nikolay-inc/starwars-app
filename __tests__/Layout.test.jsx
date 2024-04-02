import React from 'react';
import { render } from '@testing-library/react';
import RootLayout from '../src/app/layout';

const ChildComponent = () => <div data-testid="child">Child Component</div>;

describe('RootLayout Component', () => {
  test('renders header component', () => {
    const { getByTestId } = render(
      <RootLayout>
       <ChildComponent />
      </RootLayout>
    );
    const headerElement = getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders footer component', () => {
    const { getByTestId } = render(
      <RootLayout>
       <ChildComponent />
      </RootLayout>
    )
    const footerElement = getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders children components', () => {
    const { getByTestId } = render(
      <RootLayout>
        <ChildComponent />
      </RootLayout>
    );
    const childElement = getByTestId('child');
    expect(childElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(
      <RootLayout>
       <ChildComponent />
      </RootLayout>
    )
    expect(container).toMatchSnapshot();
  });
});
