
import { render } from '@testing-library/react'
import Favo from '../componeten/Favo';
// import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom';


describe('Favo component', () => {
    it('Renders without errors', () => {
    const {getByTestId} =  render (<Favo />);

      expect(getByTestId('favo-component') ).toBeInTheDocument();
    });
});




