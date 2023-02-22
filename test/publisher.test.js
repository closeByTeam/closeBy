import React, { useState} from "react";
import {
    initializeReactContainer,
    container,
    render,
    click,
    element,
    typesOf
} from "./publisherTestExtension.js";
import {
    Event,
    createEvent
} from "../publisher/newEvent";


describe("event elements", () => {

    beforeEach(() =>{
        initializeReactContainer();
    });

    it("event shows name of event", () => {
        const event = {eventName: "Cambria County Fair"};
        const component = (<Event eventName={event.eventName} />);
        render(component); 
        expect(document.body).toContainText("Cambria County Fair");
    });

    it("event shows date", () => {
        const event = {date: "September 9"};
        const component = (<Event date={event.date} />);
        render(component); 
        expect(document.body).toContainText("September 9");
    });

    it("event shows time", () => {
        const event = {date: "12:00 pm"};
        const component = (<Event date={event.date} />);
        render(component); 
        expect(document.body).toContainText("12:00 pm");
    });

    it("event shows location", () => {
        const event = {location: "1234 Address Lane"};
        const component = (<Event location={event.location} />);
        render(component); 
        expect(document.body).toContainText("1234 Address Lane");
    });

    it("event shows description", () => {
        const event = {description: "you can do stuff"};
        const component = (<Event description={event.description} />);
        render(component); 
        expect(document.body).toContainText("you can do stuff");
    });

    it("event shows type", () => {
        const event = {category: "fun"};
        const component = (<Event category={event.category} />);
        render(component); 
        expect(document.body).toContainText("fun");
    });

    it("event shows creator", () => {
        const event = {creator: "Jane Doe"};
        const component = (<Event creator={event.creator} />);
        render(component); 
        expect(document.body).toContainText("Jane Doe");
    });

    it("event shows contact information", () => {
        const event = {contact: "555-1234"};
        const component = (<Event contact={event.contact} />);
        render(component); 
        expect(document.body).toContainText("555-1234");
    });
});

describe("event buttons", () => {

    beforeEach(() =>{
        initializeReactContainer();
    });

    it("event was created", () => {
        const component = (<createEvent/>)
        render(component);
        //should expect the button to exist, no funtionality is currently required
    });

    it("event was deleted", () => {

        //should expect the button to exist, no funtionality is currently required
    });

    it("event was modified", () => {
        
        //should expect the button to exist, no funtionality is currently required
    });
});