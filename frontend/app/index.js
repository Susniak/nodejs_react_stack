import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import DataLayerComponent from './data-layer';
import RoutesComponent from './routes';
import ScrollToComponent from "../components/scroll-to";

import './style.scss';

/**
 * Base application component
 */
const AppComponent = () => {
    console.log("run");
    return <DataLayerComponent>
        <BrowserRouter>
            <ScrollToComponent/>
            <RoutesComponent/>
        </BrowserRouter>
    </DataLayerComponent>;
};

export default AppComponent;
