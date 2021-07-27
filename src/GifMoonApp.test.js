import { render, screen } from '@testing-library/react';
import GifMoonApp from './GifMoonApp';

test('renders learn react link', () => {
  render(<GifMoonApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
