import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Filters from '../Filters'; // Adjust the path if needed
import { IMultiselectOptions } from '../../MultiselectOptions/types';


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

  test("Should render the component correctly with the button", () => {
    renderComponent();

    // Ensure the filter button is rendered
    expect(screen.getByText("Filter")).toBeInTheDocument();
  });

  test("Should toggle the visibility of Multiselect component on button click", async () => {
    renderComponent();
    const user = userEvent.setup();
    
    const button = screen.getByText("Filter");
    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();

    // Click the button to show the Multiselect component
    await user.click(button);
    expect(screen.getAllByRole("checkbox")).toHaveLength(mockOptions.length);

    // Click the button again to hide the Multiselect component
    await user.click(button);
    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
  });

  test("Should call onFilterChange with updated options when Multiselect changes", async () => {
    renderComponent();
    const user = userEvent.setup();

    // Click the button to show the Multiselect component
    await user.click(screen.getByText("Filter"));

    const checkboxes = screen.getAllByRole("checkbox");

    // Click the first checkbox
    await user.click(checkboxes[0]);

    // Verify that onFilterChange was called with the correct updated options
    await waitFor(() => {
      const updatedOptions = mockOnFilterChange.mock.calls[0][0];
      expect(updatedOptions[0].isSelected).toBe(true); 
      // Only check the changed option to avoid stale closures 
    });
});
});
