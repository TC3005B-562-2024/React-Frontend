import { render, screen, cleanup } from "@testing-library/react";
import Multiselect from "../Multiselect"; 
import userEvent from '@testing-library/user-event';
import { IMultiselectOptions } from '../..//MultiselectOptions/types';

afterEach(() => {
    cleanup();
});

describe("Tests for Multiselect Component", () => {
  // Sample test data
  const mockOptions: IMultiselectOptions[] = [
      { label: "Option 1", isSelected: false, onChange: jest.fn() },
      { label: "Option 2", isSelected: true, onChange: jest.fn() },
      { label: "Option 3", isSelected: false, onChange: jest.fn() },
  ];
  
  const mockOnOptionChange = jest.fn();

  test("Should render the component correctly", () => {
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
    expect(screen.getAllByRole("checkbox")).toHaveLength(mockOptions.length);
  });

  test("calls onOptionChange with correct data when an option is clicked", async () => {
    render(
      <Multiselect
        options={mockOptions}
        onOptionChange={mockOnOptionChange}
      />
    );

    const user = userEvent.setup();
    const checkboxes = screen.getAllByRole("checkbox");

    // Click the first checkbox
    await user.click(checkboxes[0]);

    // Verify that onOptionChange was called with the correct updated options
    expect(mockOnOptionChange).toHaveBeenCalledWith([
      { label: "Option 1", isSelected: true, onChange: mockOptions[0].onChange }, // Updated isSelected
      { label: "Option 2", isSelected: true, onChange: mockOptions[1].onChange },
      { label: "Option 3", isSelected: false, onChange: mockOptions[2].onChange },
  ]);
});

  test("updates the selected state correctly", async () => {
    const { rerender } = render(
      <Multiselect
        options={mockOptions}
        onOptionChange={mockOnOptionChange}
      />
    );

    const user = userEvent.setup();
    const checkboxes = screen.getAllByRole("checkbox");

    // Click the first checkbox
    await user.click(checkboxes[0]);

    // Rerender with updated options
    mockOptions[0].isSelected = true; // Update isSelected in the original mockOptions
        rerender( // Rerender with the original (but updated) mockOptions
            <Multiselect options={mockOptions} onOptionChange={mockOnOptionChange} />
        );

    // Check the updated state
    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).toBeChecked();
    expect(checkboxes[2]).not.toBeChecked();
  });
});
