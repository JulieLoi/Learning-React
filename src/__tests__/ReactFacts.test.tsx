import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import ReactFactsPage from '../Pages/ReactFacts.page';


// React Facts Page Test Suite
describe('ReactFacts Navbar', () => {
    test('renders navbar text correctly', () => {
        render(<ReactFactsPage />);
        const actualText = screen.getByText('ReactFacts');
        expect(actualText).toBeInTheDocument();
    });
});

describe('ReactFacts Main Content', () => {
    test('renders main content text correctly', () => {
        render(<ReactFactsPage />);
        const actualText = screen.getByText('Fun facts about React');
        expect(actualText).toBeInTheDocument();
    });
});


