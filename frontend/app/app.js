import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import './styles/style.scss';
import DataLayerComponent from './data-layer';
import ViewComponent from './view';

import UserPushesComponent from "./components/elements/user-pushes";

/**
 * Base application component
 */
export default class AppComponent extends React.Component {
  render() {
    return <DataLayerComponent>
      <BrowserRouter>
        <ViewComponent/>
        <UserPushesComponent/>
      </BrowserRouter>
    </DataLayerComponent>;
  }
}
