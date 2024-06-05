import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import MultiselectOptions from "../MultiselectOptions";

describe("Tests for MultiselectOptions Component", () => {
  const mockLabel = "Option 1";
  const mockOnChange = jest.fn();

  test("renders without check icon when isSelected is false", () => {
    render(<MultiselectOptions label={mockLabel} isSelected={false} onChange={mockOnChange} />);
    expect(screen.getByText(mockLabel)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.queryByTestId("check-icon")).toBeNull(); 
  });

  test("renders with check icon when isSelected is true", () => {
  render(<MultiselectOptions label={mockLabel} isSelected={true} onChange={mockOnChange} />);
  expect(screen.getByText(mockLabel)).toBeInTheDocument();
  expect(screen.getByRole("checkbox")).toBeInTheDocument();
  expect(screen.getByTestId("check")).toBeInTheDocument(); // <-- Use "check" instead of "check-icon"
});


  test("calls onChange when the checkbox is clicked", async () => {
    const user = userEvent.setup();
    render(<MultiselectOptions label={mockLabel} isSelected={false} onChange={mockOnChange} />);
    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledWith(mockLabel, true); // Check if called with updated state
  });
});
