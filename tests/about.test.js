import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { about } from "../src/components/about/about";
import { initializeReactContainer, container, render, click, element, elements, textOf, typesOf } from "./reactTestExtensions";


describe("About", () => {

    beforeEach(() => {
        initializeReactContainer();
    });

    it("Render div", () => {
        render(<about />);
        expect(element("div")).not.toBeNull();
    });

    it("Check for text", () => {
        render(<about />);
        expect(element("h1")).not.toBeNull();
    });

});