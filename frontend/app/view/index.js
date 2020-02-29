import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from "react-redux";

import {verifyToken} from "../data-layer/actions/account.actions";
import PageHeader from "../components/elements/page-header";

import AccountComponent from "./account";
import MainComponent from "./main";
import DungeonsComponent from "./dungeons";
import LibraryComponent from "./library";

/**
 * Base router component
 */

class State extends React.Component {
    componentDidMount() {
        this.props.dispatch(verifyToken());
    }

    render() {
        return <React.Fragment>
            <PageHeader/>
            <Route exact path="/" component={MainComponent}/>
            <Route path="/account" component={AccountComponent}/>
            <Route path="/library" component={LibraryComponent}/>
            <Route path="/dungeons" component={DungeonsComponent}/>
        </React.Fragment>
    }
}

const StateComponent = connect()(State);
export default StateComponent;
