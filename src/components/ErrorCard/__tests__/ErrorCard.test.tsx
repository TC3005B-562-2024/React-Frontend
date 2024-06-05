import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ErrorCard from '../ErrorCard';

// Clean up after each test to remove elements from the test's DOM
afterEach(cleanup);

describe("ErrorCard Component Tests", () => {
    test("Displays the error title correctly", () => {
        // Define the title for the ErrorCard
        const errorTitle = "Network Error";

        // Render the ErrorCard with the provided title
        const { getByText } = render(<ErrorCard title={errorTitle} />);

        // Check if the title is displayed correctly
        expect(getByText(errorTitle)).toBeInTheDocument();
    });
});
