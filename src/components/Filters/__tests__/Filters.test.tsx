import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { IMultiselectOptions } from '../../MultiselectOptions/types';
import Filters from '../Filters'; // Adjust the path if needed

afterEach(() => {
    cleanup();
});

describe("Tests for Filters Component", () => {
    // Sample test data
    const mockOptions: IMultiselectOptions[] = [
        {
            label: "Option 1", isSelected: false,
            onChange: function (_label: string, _isSelected: boolean): void {
                throw new Error("Function not implemented.");
            }
        },
        {
            label: "Option 2", isSelected: true,
            onChange: function (_label: string, _isSelected: boolean): void {
                throw new Error("Function not implemented.");
            }
        },
        {
            label: "Option 3", isSelected: false,
            onChange: function (_label: string, _isSelected: boolean): void {
                throw new Error("Function not implemented.");
            }
        },
    ];

    const mockOnFilterChange = jest.fn();

    const renderComponent = () => {
        render(
            <Filters
                options={mockOptions}
                onFilterChange={mockOnFilterChange}
            />
        );
    };

    test("ID: F.Filters.1 - Should render the component correctly with the button", () => {
        renderComponent();

        // Ensure the filter button is rendered
        expect(screen.getByTestId("filter-wrapper")).toBeInTheDocument();
    });

    test("ID: F.Filters.2 - Should toggle the visibility of Multiselect component on button click", async () => {
        renderComponent();
        const button = screen.getByTestId("aci-button");

        // Click the button to show the Multiselect component
        fireEvent.click(button);
        expect(screen.getByTestId("filter-wrapper__multiselect")).toBeInTheDocument();
        expect(screen.getAllByRole('checkbox')).toHaveLength(mockOptions.length);
    });

    test("ID: F.Filters.3 - Should call onFilterChange with updated options when Multiselect changes", async () => {
        renderComponent();
        const button = screen.getByTestId("aci-button");
        fireEvent.click(button);

        const option = screen.getByTestId("multiselect-option-checkbox-Option 1");
        fireEvent.click(option);

        expect(mockOnFilterChange).toHaveBeenCalledTimes(1);
    });
});