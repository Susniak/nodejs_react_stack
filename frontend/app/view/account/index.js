import React from 'react';
import {Link, Route} from 'react-router-dom';

import CreateComponent from "./create";
import PlayerCreationComponent from "./player-creation";
import PlayersListComponent from "./players";
import LoginComponent from "./login";
import GeneralComponent from "./functions/general";
import ChangePasswordComponent from "./functions/chnge-password";
import ChangeEmailComponent from "./functions/change-email";

import LoggedInComponent from "../../components/elements/logged-in";
import NotLoggedInComponent from "../../components/elements/not-logged-in";
import ViewContainerComponent from "../../components/elements/view-container";
import PanelComponent from "../../components/elements/panel";

const AccountComponent = ({match}) => {
    return <React.Fragment>
        <LoggedInComponent>
            <div className="account-view">
                <ViewContainerComponent>
                    <div className="account-view__top-container">
                        <div className="account-view__account-functions">
                            <PanelComponent title={"Account options"} className={"panel--shadowed"}>
                                <div className="account-view__links">
                                    <Link to={`${match.path}/`}>General</Link>
                                    <Link to={`${match.path}/change-password`}>Change password</Link>
                                    <Link to={`${match.path}/change-email`}>Change Email</Link>
                                </div>
                                <Route exact path={`${match.path}/`} component={GeneralComponent}/>
                                <Route path={`${match.path}/change-password`} component={ChangePasswordComponent}/>
                                <Route path={`${match.path}/change-email`} component={ChangeEmailComponent}/>
                            </PanelComponent>
                        </div>

                        <div className="account-view__players-creation">
                            <PanelComponent title={'Player creation'} className={"panel--shadowed"}>
                                <PlayerCreationComponent/>
                            </PanelComponent>
                        </div>
                    </div>
                </ViewContainerComponent>
                <PanelComponent title={'Players list'}>
                    <ViewContainerComponent>
                        <PlayersListComponent/>
                    </ViewContainerComponent>
                </PanelComponent>
            </div>
        </LoggedInComponent>
        <NotLoggedInComponent>
            <Route exact path={`${match.path}/`} component={LoginComponent}/>
            <Route path={`${match.path}/create`} component={CreateComponent}/>
        </NotLoggedInComponent>
    </React.Fragment>
};

export default AccountComponent;
