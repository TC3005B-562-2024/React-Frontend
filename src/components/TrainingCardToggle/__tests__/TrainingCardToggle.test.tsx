import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import TrainingCardToggle from '../TrainingCardToggle';

afterEach(() => {
    cleanup();
});

describe("Tests for TrainingCardToggle Component", () => {
    test("Should change its CompleteButton value correctly on click to finish a task", async () => {
        const { getByTestId } = render(<TrainingCardToggle label={'Test'} isComplete={false} />);
        const button = getByTestId('complete-button');

        // Check if the CompleteButton initial value is false 
        expect(button.getAttribute('data-completed')).toBe('false');

        // Fire a click event on the button
        fireEvent.click(button);

        // Wait for the state to update to true
        await waitFor(() => {
            expect(button.getAttribute('data-completed')).toBe('true');
        });
    });

    test("Should display the data on the component label correctly", async () => {
        const { getByTestId } = render(<TrainingCardToggle label={'Test'} isComplete={false} />);
        const component = getByTestId('training-card-toggle');

        // Check if the component label is Test
        expect(component.getAttribute('data-label')).toBe('Test');
    });

    test("Should manage the data on the component isComplete correctly when the component boolean value is set", async () => {
        const { getByTestId } = render(<TrainingCardToggle label={'Test'} isComplete={true} />);
        const component = getByTestId('training-card-toggle');
        const button = getByTestId('complete-button');

        // Check if the component isComplete is true
        expect(component.getAttribute('data-is-complete')).toBe('true');

        // Check if the CompleteButton value is true 
        expect(button.getAttribute('data-completed')).toBe('true');
    });
});
