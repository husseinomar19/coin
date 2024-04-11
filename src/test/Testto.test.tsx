import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Test2 from '../componeten/Test2';
import '@testing-library/jest-dom';


test('renders Test2 component with link to home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}> {/* We beginnen de test vanuit de "/"-route */}
        <Test2 />
      </MemoryRouter>
    );
  
    const linkElement = screen.getByRole('link', { name: /go to test1/i });
    expect(linkElement).toHaveAttribute('href', '/'); // Controleer of de href overeenkomt met "/"
  });
