import { render } from '@testing-library/react'
import Header from '../componeten/Header';
// import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom';


describe('Favo component', () => {
    it('Renders without errors', () => {
    const {getByTestId} =  render (<Header />);

      expect(getByTestId('header-component') ).toBeInTheDocument();
    });
});
