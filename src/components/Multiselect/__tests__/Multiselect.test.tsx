import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { IMultiselectOptions } from '../..//MultiselectOptions/types';
import Multiselect from "../Multiselect";

afterEach(() => {
    cleanup();
});

describe("Tests for Multiselect Component", () => {
    const mockOptions: IMultiselectOptions[] = [
        { label: "Option 1", isSelected: false, onChange: jest.fn() },
        { label: "Option 2", isSelected: true, onChange: jest.fn() },
        { label: "Option 3", isSelected: false, onChange: jest.fn() },
    ];

    const mockOnOptionChange = jest.fn();

    test("ID: MS.1 - Should render the component correctly with all options and checkboxes", () => {
        render(
            <Multiselect
                options={mockOptions}
                onOptionChange={mockOnOptionChange}
            />
        );

        // Ensure all options are rendered
        mockOptions.forEach(option => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });

        // Ensure checkboxes are rendered
        expect(screen.getAllByRole('checkbox')).toHaveLength(mockOptions.length);
    });

    test("ID: MS.2 - Should call onOptionChange with correct data when an option is clicked", () => {
        render(
            <Multiselect
                options={mockOptions}
                onOptionChange={mockOnOptionChange}
            />
        );

        const checkboxes = screen.getAllByRole("checkbox");

        // Click the first checkbox
        fireEvent.click(checkboxes[0]);

        // Verify that onOptionChange was called with the correct updated options
        expect(mockOnOptionChange).toHaveBeenCalledWith([
            { label: "Option 1", isSelected: true, onChange: mockOptions[0].onChange }, 
            { label: "Option 2", isSelected: true, onChange: mockOptions[1].onChange },
            { label: "Option 3", isSelected: false, onChange: mockOptions[2].onChange },
        ]);
    });

    test("ID: MS.3 - Should update the selected state correctly when re-rendered", () => {
        const { rerender } = render(
            <Multiselect
                options={mockOptions}
                onOptionChange={mockOnOptionChange}
            />
        );

        const checkboxes = screen.getAllByRole("checkbox");

        // Click the first checkbox
        fireEvent.click(checkboxes[0]);

        // Rerender with updated options
        mockOptions[0].isSelected = true; 
        rerender( 
            <Multiselect options={mockOptions} onOptionChange={mockOnOptionChange} />
        );

        // Check the updated state
        expect(checkboxes[0]).toBeChecked();
        expect(checkboxes[1]).toBeChecked();
        expect(checkboxes[2]).not.toBeChecked();
    });
});