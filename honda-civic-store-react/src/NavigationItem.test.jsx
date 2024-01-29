import { describe, expect, it } from 'vitest';
import { getAllByAltText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { BrowserRouter } from 'react-router-dom';
import NavigationItem from './NavigationItem';

describe('Navigation Item Component',  () => {
  it('Renders', async() => {
    render(
      <BrowserRouter>
        <NavigationItem link = "homepage.com" title = "honda" />
      </BrowserRouter>
    );

    let element = await screen.findAllByText(/honda/i);
    expect(element[0]).toBeInTheDocument();
  });
});