import React from 'react';
import {connect} from "react-redux";
import InputSwitchComponent from "../../../components/generic/input-switch";
import ButtonComponent from "../../../components/typography/button";
import PanelComponent from "../../../components/elements/panel";
import {createAccount} from "../../../data-layer/actions/account.actions";
import ViewContainerComponent from "../../../components/elements/view-container";

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            repassword: '',
            email: ''
        }
    }

    onChange(name) {
        return ($event) => {
            $event.preventDefault();
            const {value} = $event.currentTarget;

            this.setState(state => ({...state, [name]: value}));
        }
    }

    createAccount() {
        return ($event) => {
            $event.preventDefault();

            this.props.dispatch(createAccount(this.state));
        }
    }

    render() {
        return <ViewContainerComponent>
            <div className="create-account">
                <div className="create-account__form-container">
                    <PanelComponent title="Create new account" className={"panel--shadowed"}>
                        <div className="create-account__form">
                            <form>
                                <InputSwitchComponent name={"name"}
                                                      title={"name"}
                                                      value={this.state.name}
                                                      onChange={this.onChange("name")}/>
                                <InputSwitchComponent name={"password"}
                                                      title={"password"}
                                                      value={this.state.password}
                                                      onChange={this.onChange("password")}/>
                                <InputSwitchComponent name={"repassword"}
                                                      title={"repassword"}
                                                      value={this.state.repassword}
                                                      onChange={this.onChange("repassword")}/>
                                <InputSwitchComponent name={"email"}
                                                      title={"email"}
                                                      value={this.state.email}
                                                      onChange={this.onChange("email")}/>
                                <ButtonComponent onClick={this.createAccount()}>
                                    Submit
                                </ButtonComponent>
                            </form>
                        </div>
                    </PanelComponent>
                </div>
            </div>
        </ViewContainerComponent>
    }
}

const CreateAccountComponent = connect()(CreateAccount);
export default CreateAccountComponent;
