import React, { useState} from "react";
import ReactDOM from "react-dom/client";
import { /** sampleComponent */} from "../ReactComponents/sampleComponent" /** replace sampleComponent to whatever the component is called */
// import manageEvent from "../publisher/manageEvent";
import Event from "../publisher/newEvent";

describe("event created", () => {

    beforeEach(() =>{
        container = document.createElement("div");
        document.body.replaceChildren(container);
    });

    it("event shows name of event", () => {
        const event = {eventName: "Cambria County Fair"};
        render(
            <Event eventName={event} />
        ); 

        expect(document.body).toContainText("Cambria County Fair");
        // expect(manageEvent).toContainText("Cambria County Fair");
    });

    it("event shows date", () => {
        // const event = {date: "September 9"};
        // expect(manageEvent).toContainText("September 9");
    });
});

describe("event deleted", () => {

    beforeEach(() =>{

    });

    it("event was created", () => {

    });

    it("event was deleted", () => {

    });
});