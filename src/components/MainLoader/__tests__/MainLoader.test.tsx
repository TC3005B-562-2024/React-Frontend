import React from "react";
import {render, cleanup, screen} from "@testing-library/react";
import MainLoader from "../MainLoader";

afterEach(() => {
    cleanup();
});

describe("Tests for Main loader ", () => {
    test("The MainLoader component renders correctly", () => {
        render(<MainLoader />);
        expect(screen.getByTestId("Loader")).toBeTruthy();
    });
});