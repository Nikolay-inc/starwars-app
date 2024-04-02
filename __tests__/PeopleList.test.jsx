import { render, screen } from '@testing-library/react';
import PeopleList from '../src/components/PeopleList';

const mockData = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 1,
    films: [1, 2, 3, 6],
    species: [1],
    vehicles: [14, 30],
    starships: [12, 22],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://sw-api.starnavi.io/people/1/'
  },
];

describe('PeopleList component', () => {
  test('renders list of people', () => {
    render(<PeopleList data={mockData} />);
    
    // ensure each person's name is rendered
    mockData.forEach(person => {
      const personName = screen.getByText(person.name);
      expect(personName).toBeInTheDocument();
    });
  });

  test('renders person details within each accordion', () => {
    render(<PeopleList data={mockData} />);
    
    mockData.forEach(person => {
      expect(screen.getByText(`Height - ${person.height}`)).toBeInTheDocument();
      expect(screen.getByText(`Mass - ${person.mass}`)).toBeInTheDocument();
    });
  });

  test('renders nothing when data is empty', () => {
    render(<PeopleList data={[]} />);
    
    // ensure there are no accordions rendered
    expect(screen.queryByRole('tabpanel')).not.toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(
      <PeopleList data={mockData} />
    );
    expect(container).toMatchSnapshot();
  });
});
