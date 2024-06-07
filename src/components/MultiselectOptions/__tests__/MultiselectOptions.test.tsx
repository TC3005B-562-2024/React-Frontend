import { fireEvent, render, screen } from "@testing-library/react";
import MultiselectOptions from "../MultiselectOptions";

describe("Tests for MultiselectOptions Component", () => {
    const mockLabel = "Option 1";
    const mockOnChange = jest.fn();

    test("ID: MSO.1 - Renders without check icon when isSelected is false", () => {
        render(<MultiselectOptions label={mockLabel} isSelected={false} onChange={mockOnChange} />);
        expect(screen.getByText(mockLabel)).toBeInTheDocument();
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
        expect(screen.queryByTestId("check-icon")).toBeNull(); 
    });

    test("ID: MSO.2 - Renders with check icon when isSelected is true", () => {
        render(<MultiselectOptions label={mockLabel} isSelected={true} onChange={mockOnChange} />);
        expect(screen.getByText(mockLabel)).toBeInTheDocument();
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
        expect(screen.getByTestId("check")).toBeInTheDocument(); 
    });

    test("ID: MSO.3 - Calls onChange when the checkbox is clicked", () => {
        render(<MultiselectOptions label={mockLabel} isSelected={false} onChange={mockOnChange} />);
        const checkbox = screen.getByRole("checkbox");

        fireEvent.click(checkbox);

        expect(mockOnChange).toHaveBeenCalledWith(mockLabel, true); 
    });
});