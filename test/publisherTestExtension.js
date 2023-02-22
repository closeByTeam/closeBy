export let container;
import ReactDOM from "react-dom/client";
import { act} from "react-dom/test-utils";

export const initializeReactContainer = () =>{
    container = document.createElement("div");
    document.body.replaceChildren(container);
};

export const render = (component) =>
        act (() =>
            ReactDOM.createRoot(container).render(component)
        );

export const click = (element) =>
    act(() => element.click());

export const element = (selector) => document.querySelector(selector);

export const typesOf = (elements) => elements.map((element) => element.type);
