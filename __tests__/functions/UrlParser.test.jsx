import { urlParser } from '../../src/helpers/urlParser';

describe('urlParser Function', () => {
  test('parses URL with valid format', () => {
    const url = 'https://example.com/api/people/42/';
    const result = urlParser(url);
    expect(result).toBe('42');
  });

  test('returns null for null input', () => {
    const url = null;
    const result = urlParser(url);
    expect(result).toBeNull();
  });

  test('returns null for empty string input', () => {
    const url = '';
    const result = urlParser(url);
    expect(result).toBeNull();
  });

  test('returns null for invalid URL format', () => {
    const url = 'invalid-url';
    const result = urlParser(url);
    expect(result).toBeUndefined();
  });
});
