import { render, cleanup, screen } from "@testing-library/react";
import Icon from "../Icon";
import { IconNames } from "../types";

afterEach(() => {
  cleanup();
});

describe("Tests for Icon Component", () => {
  test("Should render all the valid values for the iconNames", () => {
    // Loop through all the valid values for the iconName
    Object.values(IconNames).forEach((iconName) => {
      render(<Icon iconName={iconName} />);
      const icon = screen.getByTestId(iconName);
      expect(icon).toBeInTheDocument();
    });
  });

  test('Renders an invalid value for the iconName', () => {
    render(<Icon iconName={"invalid-value" as IconNames} />);

    const icon = screen.getByTestId('default');

    // Check that the button contains the text
    expect(icon).toHaveTextContent('Icon not found :(');
  });
});
