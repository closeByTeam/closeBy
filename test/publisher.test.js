import React, { useState} from "react";
import {
    initializeReactContainer,
    container,
    render,
} from "./publisherTestExtension.js";
import {
    Event
} from "../publisher/newEvent";


describe("event created", () => {

    beforeEach(() =>{
        initializeReactContainer();
    });

    it("event shows name of event", () => {
        const eventName = {eventName: "Cambria County Fair"};
        const component = (<Event eventName={eventName.eventName} />);
        render(component); 
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