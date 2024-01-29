import { describe, expect, it } from 'vitest';
import { getAllByAltText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Product from './Product';

describe('Product Component',  () => {
  it('Renders', async() => {
    render(
      <BrowserRouter>
        <Product />
      </BrowserRouter>
    );

    let element = await screen.findAllByText(/product/i);
    expect(element[0]).toBeInTheDocument();
  });

  it('Renders passed in data', async() => {
    render(
      <BrowserRouter>
        <Product products = {[{productName : "honda"}]} />
      </BrowserRouter>
    );

    let element = await screen.findAllByText(/honda/i);
    expect(element[0]).toBeInTheDocument();
  })
});