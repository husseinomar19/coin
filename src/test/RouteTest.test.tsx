import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Voeg BrowserRouter toe
import RouteTest from '../componeten/Test';
import '@testing-library/jest-dom';

describe('Favo component', () => {
    it('Renders without errors', () => {
        const { getByTestId } = render(
            <BrowserRouter> {/* Wrap je componenten in BrowserRouter */}
                <RouteTest />
            </BrowserRouter>
        );

        expect(getByTestId('Route-component')).toBeInTheDocument();
    });
});
