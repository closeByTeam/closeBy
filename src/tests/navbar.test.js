import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { initializeReactContainer, container, render, click, element, elements, textOf, typesOf } from "./reactTestExtensions";


describe("NavBar", () => {

    beforeEach(() => {
        initializeReactContainer();
    });

    it("Renders a ul element for the navbar choices", () => {
        render(<navbar />);
        const listElement = element("ul");
        expect(element("ul")).not.toBeNull();
    });

    it("Renders 2 li elements", () => {
        render(<navbar />);
        const listChildren = elements("ul > li");
        // expect(listChildren).toHaveLength(2);
        expect(listChildren[0]).toHaveTextContent;
        expect(listChildren[1]).toHaveTextContent;
    });
});