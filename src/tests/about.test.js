import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

describe("About", () => {

    it("Render div", () => {
        render(<about />);
        expect(element("div")).not.toBeNull();
    });
});