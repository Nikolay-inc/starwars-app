import { render, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import PersonProfile from '../src/components/PersonProfile';

// mocking ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe('PersonProfile', () => {
  let mockAxios;

  // mock data
  const person = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    films: ['https://sw-api.starnavi.io/films/1', 'https://sw-api.starnavi.io/films/2'],
    starships: ['https://sw-api.starnavi.io/starships/1', 'https://sw-api.starnavi.io/starships/2'],
  };

  const films = [
    { title: 'A New Hope', url: 'https://sw-api.starnavi.io/films/1' },
    { title: 'The Empire Strikes Back', url: 'https://sw-api.starnavi.io/films/2' },
  ];

  beforeEach(() => {
    // mocking Axios requests
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    // restoring Axios mock after each test
    mockAxios.restore();
  });

  test('renders the component with person data and films', async () => {
    // mocking axios responses
    mockAxios.onGet(person.films[0]).reply(200, { title: 'A New Hope' });
    mockAxios.onGet(person.films[1]).reply(200, { title: 'The Empire Strikes Back' });
    mockAxios.onGet(person.starships[0]).reply(200, { name: 'X-Wing Fighter' });
    mockAxios.onGet(person.starships[1]).reply(200, { name: 'TIE Fighter' });

    render(<PersonProfile person={person} films={films} />);

    // asserting that person's name is rendered
    expect(await screen.findByText(person.name)).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(
      <PersonProfile person={person} films={films} />
    );
    expect(container).toMatchSnapshot();
  });
});
