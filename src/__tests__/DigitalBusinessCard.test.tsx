import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import DigitalBusinessCardPage from '../Pages/DigitalBusinessCard.page';
import Description from '../components/DigitalBusinessCard/Description.component';


describe("Digital Business Card Page", () => {
    test("renders correctly", () => {
        render(<DigitalBusinessCardPage />);
    });
});




