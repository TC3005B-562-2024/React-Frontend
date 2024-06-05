import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

afterEach(() => {
  cleanup();
});

describe("Tests for Button Component", () => {
  test("Should render the default Button component correctly and handle the click event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} text="text" />);
    
    const button = screen.getByTestId('aci-button');
    expect(button).toBeInTheDocument();

    // Check that the button has the default orange class
    expect(button).toHaveClass('aci-button--orange');

    // Check that the button does contain the default text content
    expect(button).toHaveTextContent('text');

    // Check that the button is not disabled
    expect(button).not.toBeDisabled();

    // Check that the click event is working
    fireEvent.click(button);

    // Check that the click event is working
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  test('Renders with provided text', () => {
    render(<Button onClick={() => {}} text="Click me" />);
    
    const button = screen.getByTestId('aci-button');
    
    // Check that the button contains the text
    expect(button).toHaveTextContent('Click me');
  });

  test('Renders with provided color', () => {
    render(<Button onClick={() => {}} color="red" />);
    
    const button = screen.getByTestId('aci-button');
    
    // Check that the button has the red class instead of the default orange
    expect(button).toHaveClass('aci-button--red');
    expect(button).not.toHaveClass('aci-button--orange');
  });

  test('Renders disabled button', () => {
    render(<Button onClick={() => {}} isDisabled />);
    
    const button = screen.getByTestId('aci-button');
    
    // Check that the button is disabled
    expect(button).toBeDisabled();
  });
});

