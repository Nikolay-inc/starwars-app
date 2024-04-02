import { render, screen } from '@testing-library/react';
import ListItem from '../src/components/ListItem';
import { Accordion } from '@chakra-ui/react';

describe('ListItem component', () => {
  // mock person data
  const person = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    url: 'https://sw-api.starnavi.io/people/1/',
  };

  test('renders person name as a link', () => {
    render(
      <Accordion allowMultiple>
        <ListItem person={person} />
      </Accordion>
    );
    const linkElement = screen.getByRole('link', { name: /Luke Skywalker/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/people/1');
  });

  test('renders person details', () => {
    render(
      <Accordion allowMultiple>
        <ListItem person={person} />
      </Accordion>
    );
    expect(screen.getByText(/Height - 172/i)).toBeInTheDocument();
    expect(screen.getByText(/Mass - 77/i)).toBeInTheDocument();
    expect(screen.getByText(/Hair Color - blond/i)).toBeInTheDocument();
    expect(screen.getByText(/Skin Color - fair/i)).toBeInTheDocument();
    expect(screen.getByText(/Eye Color - blue/i)).toBeInTheDocument();
    expect(screen.getByText(/Birth Year - 19BBY/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender - male/i)).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(
      <Accordion allowMultiple>
        <ListItem person={person} />
      </Accordion>
    );
    expect(container).toMatchSnapshot();
  });
});
