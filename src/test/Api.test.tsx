import { render } from '@testing-library/react';
import Favo from '../componeten/Favo';

test('renders favo component', async () => {
  const { findByTestId, findAllByTestId } = render(<Favo />);
  

  const favoComponent = await findByTestId('favo-component');

  expect(favoComponent).toBeInTheDocument();

  
  const cards = await findAllByTestId('crypto-card');
  expect(cards.length).toBe(4); 
});
