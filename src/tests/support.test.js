import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

describe("Support", () => {

    it("Render div", () => {
        render(<support />);
        expect(element("div")).not.toBeNull();
    });
});