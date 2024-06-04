import { render, screen, cleanup } from "@testing-library/react";
import MultiselectOptions from "../MultiselectOptions"; // Adjust the path if needed
import userEvent from '@testing-library/user-event'

afterEach(() => {
    cleanup();
  });

describe("Tests for MultiselectOptions Component", () => {
  // Sample test data
  const mockLabel = "Option 1";
  const mockIsSelected = false;
  const mockOnChange = jest.fn();

  test("Should render the component correctly", () => {
    render(
      <MultiselectOptions
        label={mockLabel}
        isSelected={mockIsSelected}
        onChange={mockOnChange}
      />
    );

    // Ensure the label and checkbox are rendered
    expect(screen.getByText(mockLabel)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("calls onChange when the checkbox is clicked", async () => {
    render(
      <MultiselectOptions
        label={mockLabel}
        isSelected={mockIsSelected}
        onChange={mockOnChange}
      />
    );

    const user = userEvent.setup()
    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox) // Simulate a click

    expect(mockOnChange).toHaveBeenCalledWith(mockLabel, !mockIsSelected);
  });

  test("renders check icon when isSelected is true", () => {
    render(
      <MultiselectOptions
        label={mockLabel}
        isSelected={true} // Simulate selected state
        onChange={mockOnChange}
      />
    );

    // Assert that the check icon is present (you'll need to add a data-testid to your check icon element)
    expect(screen.getByTestId("check-icon")).toBeInTheDocument();
  });
});
