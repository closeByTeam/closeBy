import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { initializeReactContainer, container, render, click, element, elements, textOf, typesOf } from "./reactTestExtensions";

describe("Support", () => {

    beforeEach(() => {
        initializeReactContainer();
    });

    it("Render div", () => {
        render(<support />);
        expect(element("div")).not.toBeNull();
    });
});