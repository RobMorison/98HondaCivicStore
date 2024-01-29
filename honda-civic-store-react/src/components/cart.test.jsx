import { describe, expect, it } from 'vitest';
import { getAllByAltText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { BrowserRouter } from 'react-router-dom';
import Cart from './cart';

describe('Cart Component',  () => {
  it('Renders', async() => {
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );

    let element = await screen.findAllByText(/cart/i);
    expect(element[0]).toBeInTheDocument();
  });

//   it('Renders passed in data', async() => {
//     render(
//       <BrowserRouter>
//         <Product products = {[{productName : "honda"}]} />
//       </BrowserRouter>
//     );

//     let element = await screen.findAllByText(/honda/i);
//     expect(element[0]).toBeInTheDocument();
//   })
});