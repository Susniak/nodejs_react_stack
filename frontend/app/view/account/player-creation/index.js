import React from 'react';
import {connect} from "react-redux";
import InputSwitchComponent from "../../../components/generic/input-switch";
import ButtonComponent from "../../../components/typography/button";
import {addPlayer} from "../../../data-layer/actions/player.actions";

const mapStateToProps = state => ({
    accountId: state.account.userData ? state.account.userData.id : ''
});

class PlayerCreation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                name: "",
                sex: 0,
                accountId: this.props.accountId
            }
        }
    }

    onChange(name) {
        return ($event) => {
            const data = {...this.state.data, [name]: $event.currentTarget.value};

            this.setState(state => ({...state, data}));
        }
    }

    addPlayer() {
        return $event => {
            $event.preventDefault();

            this.props.dispatch(addPlayer(this.state.data))
        }
    }

    render() {
        return <div className={"player-creation"}>
            <form>
                <InputSwitchComponent name={"name"}
                                      title={"name"}
                                      value={this.state.data.name}
                                      className={"classic-input"}
                                      onChange={this.onChange("name")}/>
                <InputSwitchComponent name={"sex"}
                                      type={"select"}
                                      title={"Sex"}
                                      className={"classic-input"}
                                      value={this.state.data.sex}
                                      onChange={this.onChange("sex")}>
                    <option value={0}>Man</option>
                    <option value={1}>Women</option>
                </InputSwitchComponent>
                <div className="player-creation__buttons">
                    <ButtonComponent onClick={this.addPlayer()}>
                        Submit
                    </ButtonComponent>
                </div>
            </form>
        </div>
    }
}

const PlayerCreationComponent = connect(mapStateToProps)(PlayerCreation);

export default PlayerCreationComponent;
