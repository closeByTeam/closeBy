import React from 'react';
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { initializeReactContainer, container, render, click, element, elements, textOf, typesOf } from "./reactTestExtensions";



describe("Homepage", () => {

    beforeEach(() => {
        initializeReactContainer();
    });

    it("Render the title", () => {
        render(<homepage />);
        expect(document.body).toHaveTextContent;
    });

});