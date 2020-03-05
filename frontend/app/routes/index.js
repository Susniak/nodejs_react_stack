import React from 'react';
import {Route} from 'react-router-dom'

import MainComponent from "./main";

const StateComponent = () => {
    console.log("run");
    return <React.Fragment>
        <Route exact path="/" component={MainComponent}/>
    </React.Fragment>
};

export default StateComponent;
