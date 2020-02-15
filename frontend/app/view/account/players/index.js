import React from 'react';
import {connect} from "react-redux";
import PlayerCircle from "../../../components/elements/player-circle";

const mapStateToProps = state => ({
    players: state.account.userData.players
});


class PlayersList extends React.Component {
    render() {
        return <div className="players-list">
            {this.props.players.map(circle => <div className="players-list__element"><PlayerCircle {...circle}/></div>)}
        </div>
    }
}

const PlayersListComponent = connect(mapStateToProps)(PlayersList);

export default PlayersListComponent;
