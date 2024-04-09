import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Voeg BrowserRouter toe
import Dashboard from '../componeten/Dashborad';
import '@testing-library/jest-dom';

describe('Favo component', () => {
    it('Renders without errors', () => {
        const { getByTestId } = render(
            <BrowserRouter> {/* Wrap je componenten in BrowserRouter */}
                <Dashboard />
            </BrowserRouter>
        );

        expect(getByTestId('dash-component')).toBeInTheDocument();
    });
});
