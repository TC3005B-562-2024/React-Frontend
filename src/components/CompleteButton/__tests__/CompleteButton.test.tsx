import { render, fireEvent, waitFor, cleanup, screen } from '@testing-library/react';
import CompleteButton from '../CompleteButton';
import { IconNames } from '../../Icon/types';

afterEach(() => {
    cleanup();
});

describe("Tests for CompleteButton Component", () => {
    test("Should change its boolean value correctly on click", async () => {
        render(<CompleteButton isComplete={false} />);
        const button = screen.getByTestId('complete-button');

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
        render(<CompleteButton isComplete={false} />);
        const button = screen.getByTestId('complete-button');
        const icon = screen.getByTestId(IconNames.RadioButtonUnchecked);

        expect(icon).toBeInTheDocument();

        // Fire a click event on the button
        fireEvent.click(button);

        // Wait for the state to update
        await waitFor(() => {
            expect(screen.getByTestId(IconNames.CheckCircleFill)).toBeInTheDocument();
        });

        // Fire a click event again to toggle back
        fireEvent.click(button);

        // Wait for the icon name to change back to radio_button_unchecked
        await waitFor(() => {
            expect(screen.getByTestId(IconNames.RadioButtonUnchecked)).toBeInTheDocument();
        });
    });
});
