import React from "react";
import SideBar from "../SideBar";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { mockGetAllSkillsResponse } from "../../../services/skills/_mocks_/mocksGetAllSkills";
import { AppContextProvider } from '../../../app-context/app-context';

afterEach(() => {
  cleanup();
});

const renderComponentCorrectly = () => {
  render(
    <AppContextProvider>
      <MemoryRouter>
        <SideBar skills={mockGetAllSkillsResponse} />
      </MemoryRouter>
    </AppContextProvider>
  );
}

const renderComponentUndefinedSkills = () => {
  render(
    <AppContextProvider>
      <MemoryRouter>
        <SideBar skills={undefined} />
      </MemoryRouter>
    </AppContextProvider>
  );
}

describe("Tests for SideBar Component", () => {
  test("ID: F.SideBar.1 - The SideBar component renders correctly", () => {
    renderComponentCorrectly();
    expect(screen.getByTestId("side-bar__container")).toBeInTheDocument();
  });

  test("ID: F.SideBar.2 - The SideBar component expands and collapses correctly", () => {
    renderComponentCorrectly();
    // Find button
    const expandButton = screen.getByTestId("aci-button");
    expect(expandButton).toBeInTheDocument();

    // Check if the SideBar is expanded
    expect(screen.getByTestId("side-bar__container")).toBeInTheDocument();
    expect(screen.queryByTestId("side-bar__container")).toHaveClass("side-bar__container--expaned");

    // Click on the button to collapse the SideBar
    fireEvent.click(expandButton);
    expect(screen.getByTestId("side-bar__container")).toHaveClass('side-bar__container--unexpaned');
  });

  test("ID: F.SideBar.3 - The SideBar component renders correctly when skills are undefined", () => {
    renderComponentUndefinedSkills();
    expect(screen.getByTestId("side-bar__container")).toBeInTheDocument();
    expect(screen.queryByTestId("side-bar__container__error-alert")).toHaveTextContent("No Skills Found.")
  });
});
