import React from "react";
import Calendar from "react-calendar";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { initializeReactContainer, container, render, click, element, elements, textOf, typesOf } from "./reactTestExtensions";

describe("Results", () => {

    beforeEach(() => {
        initializeReactContainer();
    });

    it("Render main div", () => {
        render(<results />);
        expect(element("div")).not.toBeNull();
    });
});