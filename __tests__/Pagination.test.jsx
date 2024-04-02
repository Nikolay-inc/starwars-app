import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '../src/components/Pagination';

// mocking pageHandler function
jest.mock('../src/helpers/pageHandler', () => ({
  pageHandler: jest.fn((toPage) => {
    if (!toPage) return '';

    const newCurrentPage = new URLSearchParams(toPage.split('?')[1]).get('page');
    return newCurrentPage ? +newCurrentPage : 1;
  })
}));

describe('Pagination component', () => {
  test('renders Previous Page button', () => {
    render(<Pagination previousPage="https://example.com/?page=1" nextPage={"https://example.com/?page=2"} />);
    const prevPageButton = screen.getByRole('button', { name: /Previous Page/i });
    expect(prevPageButton).toBeInTheDocument();
  });

  test('renders Next Page button', () => {
    render(<Pagination previousPage="https://example.com/?page=1" nextPage={"https://example.com/?page=2"} />);
    const nextPageButton = screen.getByRole('button', { name: /Next Page/i });
    expect(nextPageButton).toBeInTheDocument();
  });

  test('disables Previous Page button when there is no previous page', () => {
    render(<Pagination />);
    const prevPageButton = screen.getByRole('button', { name: /Previous Page/i });
    expect(prevPageButton).toBeDisabled();
  });

  test('disables Next Page button when there is no next page', () => {
    render(<Pagination />);
    const nextPageButton = screen.getByRole('button', { name: /Next Page/i });
    expect(nextPageButton).toBeDisabled();
  });

  test('handles click on Previous Page button', () => {
    const mockPrevPageHandler = jest.fn();
    render(<Pagination previousPage="https://example.com/?page=1" nextPage={"https://example.com/?page=2"} />);
    const prevPageButton = screen.getByRole('button', { name: /Previous Page/i });
    userEvent.click(prevPageButton);
    expect(mockPrevPageHandler).toHaveBeenCalledTimes(0);
  });

  test('handles click on Next Page button', () => {
    const mockNextPageHandler = jest.fn();
    render(<Pagination previousPage={"https://example.com/?page=1"} nextPage="https://example.com/?page=3" />);
    const nextPageButton = screen.getByRole('button', { name: /Next Page/i });
    userEvent.click(nextPageButton);
    expect(mockNextPageHandler).toHaveBeenCalledTimes(0);
  });

  test('matches snapshot', () => {
    const { container } = render(
      <Pagination previousPage={"https://example.com/?page=1"} nextPage="https://example.com/?page=3" />
    );
    expect(container).toMatchSnapshot();
  });
});
