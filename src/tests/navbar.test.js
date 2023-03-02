import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

describe("NavBar", () => {

    it("Renders a ul element for the navbar choices", () => {
        render(<navbar />);
        const listElement = element("ul");
        expect(element("ul")).not.toBeNull();
    });

    it("Renders multiple 2 li elements", () => {
        render(<navbar />);
        const listChildren = elements("ul > li");
        expect(listChildren).toHaveLength(2);
        expect(listChildren[0].textContent).toEqual("support")
        expect(listChildren[1].textContent).toEqual("about us")
    });
});