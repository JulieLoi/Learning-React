import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import ReactFactsPage from '../Pages/ReactFacts.page';

test('renders react facts', () => {
    render(<ReactFactsPage />);
    const linkElement = screen.getByText('ReactFacts');
    expect(linkElement).toBeInTheDocument();
});