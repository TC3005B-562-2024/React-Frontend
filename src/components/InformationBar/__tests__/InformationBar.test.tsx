import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import InformationBar from '../InformationBar';
import { IItemSubitem } from '../../ItemSubitem/types';

afterEach(() => {
    cleanup();
});

describe("Tests for InformationBar Component", () => {

    const elementsMock: IItemSubitem[] = [
        { title: "Item 1", content: "Content 1", color: "yellow" },
        { title: "Item 2", content: "Content 2", color: "red" }
    ];
    
    test("InformationBar component renders correctly", () => {
        render(<InformationBar title="Test Title" elements={elementsMock} />);
        const bar = screen.getByTestId("informtion-bar");
        expect(bar).toBeInTheDocument();
        expect(screen.getByTestId("information-bat-title").textContent).toBe("Test Title");
    });

    test("Title displays correctly", () => {
        render(<InformationBar title="Unique Title" elements={elementsMock} />);
        const title = screen.getByTestId("information-bat-title");
        expect(title.textContent).toBe("Unique Title");
    });

    test("Applies correct styling and classes", () => {
        render(<InformationBar title="Test Title" elements={elementsMock} />);
        const bar = screen.getByTestId("informtion-bar");
        expect(bar).toHaveClass('bg-white');
        expect(bar).toHaveClass('drop-shadow-lg');
    });
});