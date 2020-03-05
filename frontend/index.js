import React from "react";
import {render} from "react-dom";
import AppComponent from './app';

const container = window.document.querySelector("#main-container");

if (container) {
    render(<AppComponent/>, container);
}
