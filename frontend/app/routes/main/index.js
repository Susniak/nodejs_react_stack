import React from 'react';
import {connect} from "react-redux";
import './style.scss';

class Main extends React.Component {
    render() {
        return <React.Fragment>
            Welcome on board!
        </React.Fragment>
    }
}

const MainComponent = connect()(Main);

export default MainComponent;
