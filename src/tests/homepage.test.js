import React from 'react';
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

describe("Homepage", () => {

    it("Render the title", () => {
        render(<homepage />);
        expect(document.body).toContainText("find an event")
    });

    it("Render button", () => {
        render(<homepage />);
        const button = element("ColorButton");
        expect(button).not.toBeNull();
    });
});