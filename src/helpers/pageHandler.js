// to handle between pages

export const pageHandler = (toPage) => {
  if (!toPage) return '';

  const newCurrentPage = new URLSearchParams(toPage.split('?')[1]).get('page');
  return newCurrentPage ? +newCurrentPage : 1;
}