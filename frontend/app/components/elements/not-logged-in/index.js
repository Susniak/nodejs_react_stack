import React from 'react';
import {connect} from "react-redux";

const mapStateToProps = state => ({
    isLogged: state.account && state.account.token
});

const NotLoggedInComponent = connect(mapStateToProps)(({isLogged, children}) => {
    return !isLogged ? children : '';
});

export default NotLoggedInComponent;
