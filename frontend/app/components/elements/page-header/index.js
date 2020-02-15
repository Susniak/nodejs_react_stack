import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import LoggedInComponent from "../logged-in";
import NotLoggedInComponent from "../not-logged-in";
import {logout} from "../../../data-layer/actions/account.actions";

const PageHeader = (props) => {
    return <div className="page-header">
        <div className="page-header__upper">
            <div className="page-header__logo">
                Test
            </div>
        </div>
        <div className="page-header__down">
            <div className="app-container">
                <div className="page-header__container">
                    <ul className="page-header__list">
                        <li className="page-header__list-element">
                            <Link to="/">Main page</Link>
                        </li>
                    </ul>
                    <ul className="page-header__list page-header__list--right">
                        <LoggedInComponent>
                            <li className="page-header__list-element page-header__list-element--active">
                                <Link to="/account">Account</Link>
                            </li>
                            <li className="page-header__list-element">
                                <a onClick={() => props.dispatch(logout())}>Logout</a>
                            </li>
                        </LoggedInComponent>
                        <NotLoggedInComponent>
                            <li className="page-header__list-element ">
                                <Link to="/account/create">Register account</Link>
                            </li>
                            <li className="page-header__list-element page-header__list-element--active">
                                <Link to="/account/">Login</Link>
                            </li>
                        </NotLoggedInComponent>
                    </ul>
                </div>
            </div>
        </div>
    </div>
};

export default connect()(PageHeader);
