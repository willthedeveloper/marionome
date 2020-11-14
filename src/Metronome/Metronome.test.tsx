import { render, screen } from '@testing-library/react';
import Metronome from '.';

test('renders learn react link', () => {
  render(<Metronome />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
