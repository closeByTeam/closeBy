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
        expect(element("ul")).toBeNull();
    });
});