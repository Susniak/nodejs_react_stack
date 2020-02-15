import React from 'react';
import {connect} from "react-redux";
import InputSwitchComponent from "../../../components/generic/input-switch";
import ButtonComponent from "../../../components/typography/button";
import {getUser} from "../../../data-layer/actions/account.actions";
import PanelComponent from "../../../components/elements/panel";
import ViewContainerComponent from "../../../components/elements/view-container";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                password: "",
                name: ""
            }
        }
    }

    onChange(name) {
        return ($event) => {
            $event.preventDefault();
            const data = {...this.state.data, [name]: $event.currentTarget.value};

            this.setState(state => ({...state, data}));
        }
    }

    login() {
        return ($event) => {
            $event.preventDefault();

            this.props.dispatch(getUser(this.state.data))
        }
    }

    render() {
        return <ViewContainerComponent>
            <div className="login-account">
                <div className="login-account__left-panel">
                    <div className="login-account__form-container">
                        <PanelComponent title="Login to your account" className={"panel--shadowed"}>
                            <div className="login-account__form">
                                <form>
                                    <InputSwitchComponent name={"name"}
                                                          title={"name"}
                                                          value={this.state.data.name}
                                                          onChange={this.onChange("name")}/>
                                    <InputSwitchComponent name={"password"}
                                                          title={"password"}
                                                          value={this.state.data.password}
                                                          onChange={this.onChange("password")}/>
                                    <ButtonComponent onClick={this.login()}>
                                        Submit
                                    </ButtonComponent>
                                </form>
                            </div>
                        </PanelComponent>
                    </div>
                </div>
                <div className="login-account__image">
                    <img src="https://via.placeholder.com/400x350"/>
                </div>
            </div>
        </ViewContainerComponent>
    }
}

const LoginComponent = connect()(Login);
export default LoginComponent;
