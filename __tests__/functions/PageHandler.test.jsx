import { pageHandler } from '../../src/helpers/pageHandler';

describe('pageHandler Function', () => {
  test('handles valid input with page parameter', () => {
    const toPage = 'https://test.com/?page=2';
    const result = pageHandler(toPage);
    expect(result).toBe(2);
  });

  test('handles valid input without page parameter', () => {
    const toPage = 'https://test.com/';
    const result = pageHandler(toPage);
    expect(result).toBe(1);
  });

  test('handles invalid input', () => {
    const toPage = null;
    const result = pageHandler(toPage);
    expect(result).toBe('');
  });
});
