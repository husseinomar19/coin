import { render } from '@testing-library/react'
import UserInfo from '../componeten/UserInfo';
// import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom';


describe('Favo component', () => {
    it('Renders without errors', () => {
    const {getByTestId} =  render (<UserInfo />);

      expect(getByTestId('user-component') ).toBeInTheDocument();
    });
});
