import React from "react";
import { render, fireEvent, waitFor, cleanup, screen } from "@testing-library/react";
import ItemSubitem from "../ItemSubitem";

afterEach(() => {
    cleanup();
});

describe("Tests for ItemSubitem Component", () => {
        test("ID: ISI.1 The ItemSubitem component renders correctly", () => {
                render(<ItemSubitem title="cocjoc" content="jfijfeijfiej" color={"green"}/>);
                expect(screen.getByTestId("ItemSubitem")).toBeTruthy();
        });
});