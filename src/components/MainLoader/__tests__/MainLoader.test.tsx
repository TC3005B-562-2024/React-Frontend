import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import MainLoader from "../MainLoader";

afterEach(() => {
  cleanup();
});

describe("Tests for Main loader ", () => {
  test("ID: ML.1 - MainLoader component renders correctly", () => { // Added test ID
    render(<MainLoader />);
    expect(screen.getByTestId("Loader")).toBeTruthy();
  });
});