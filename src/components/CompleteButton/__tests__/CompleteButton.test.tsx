import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import CompleteButton from '../CompleteButton';

afterEach(() => {
    cleanup();
});

describe("Tests for CompleteButton Component", () => {
    test("Should change its boolean value correctly on click", async () => {
        const { getByTestId } = render(<CompleteButton isComplete={false} />);
        const button = getByTestId('complete-button');

        // Check if the button initial value is false and the data-completed attribute is false
        expect(button.getAttribute('data-completed')).toBe('false');

        // Fire a click event on the button
        fireEvent.click(button);

        // Wait for the state to update to true
        await waitFor(() => {
            expect(button.getAttribute('data-completed')).toBe('true');
        });
    });

    test("Should change its icon object correctly on click", async () => {
        const { getByTestId } = render(<CompleteButton isComplete={false} />);
        const button = getByTestId('complete-button');
        const icon = button.querySelector('[data-icon-name]');

        // Check if the button initial icon name is radio_button_unchecked 
        expect(icon).toHaveAttribute('data-icon-name', 'radio_button_unchecked');

        // Fire a click event on the button
        fireEvent.click(button);

        // Wait for the state to update
        await waitFor(() => {
            expect(button.querySelector('[data-icon-name]')).toHaveAttribute('data-icon-name', 'check_circle_fill');
        });

        // Fire a click event again to toggle back
        fireEvent.click(button);

        // Wait for the icon name to change back to radio_button_unchecked
        await waitFor(() => {
            expect(button.querySelector('[data-icon-name]')).toHaveAttribute('data-icon-name', 'radio_button_unchecked');
        });
    });
});
