import React from "react";
import Calendar from "react-calendar";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { initializeReactContainer, container, render, click, element, elements, textOf, typesOf } from "./reactTestExtensions";

describe("Calendar", () => {

    beforeEach(() => {
        initializeReactContainer();
    });

    it("Render main div", () => {
        render(<calendar />);
        expect(element("div")).not.toBeNull();
    });

});