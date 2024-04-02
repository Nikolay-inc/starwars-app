import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getPeopleData } from '../../src/helpers/fetchPeople';

describe('getPeopleData function', () => {
  const mockData = {
    results: [],
    next: 'https://swapi.dev/api/people/?page=2',
    previous: null,
  };

  let mock;

  // mocking axios
  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  // reset axios
  afterEach(() => {
    mock.reset();
  });

  test('fetches data successfully with page parameter', async () => {
    const page = 1;
    const baseUrl = 'https://swapi.dev/api/people/';
    mock.onGet(`${baseUrl}?page=${page}`).reply(200, mockData);
    
    const result = await getPeopleData(baseUrl, page);
    expect(result).toEqual(mockData);
  });

  test('fetches data successfully without page parameter', async () => {
    const baseUrl = 'https://swapi.dev/api/people/';
    mock.onGet(baseUrl).reply(200, mockData);
    
    const result = await getPeopleData(baseUrl);
    expect(result).toEqual(mockData);
  });

  test('handles errors', async () => {
    const baseUrl = 'https://swapi.dev/api/people/';
    mock.onGet(baseUrl).reply(500);

    await expect(getPeopleData(baseUrl)).rejects.toThrow();
  });
});
