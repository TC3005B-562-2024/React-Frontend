import { cleanup, render, screen } from '@testing-library/react';
import { IItemSubitem } from '../../ItemSubitem/types';
import InformationBar from '../InformationBar';

afterEach(() => {
  cleanup();
});

describe("Tests for InformationBar Component", () => {
  const elementsMock: IItemSubitem[] = [
    { title: "Item 1", content: "Content 1", color: "yellow" },
    { title: "Item 2", content: "Content 2", color: "red" }
  ];

  test("ID: IB.1 - InformationBar component renders correctly with title and elements", () => {
    render(<InformationBar title="Test Title" elements={elementsMock} />);
    const bar = screen.getByTestId("information-bar");
    expect(bar).toBeInTheDocument();
    expect(screen.getByTestId("information-bar-title").textContent).toBe("Test Title");
  });

  test("ID: IB.2 - Title displays correctly with unique text", () => {
    render(<InformationBar title="Unique Title" elements={elementsMock} />);
    const title = screen.getByTestId("information-bar-title");
    expect(title.textContent).toBe("Unique Title");
  });

  test("ID: IB.3 - Applies correct styling and classes to the bar", () => {
    render(<InformationBar title="Test Title" elements={elementsMock} />);
    const bar = screen.getByTestId("information-bar");
    expect(bar).toHaveClass('bg-white');
    expect(bar).toHaveClass('drop-shadow-lg');
  });
});