import React from 'react';
import {connect} from "react-redux";
import PlayerCircle from "../../../components/elements/player-circle";

const mapStateToProps = state => ({
    players: state.account.userData.players
});


class PlayersList extends React.Component {
    render() {
        const getPlayerCircle = circle => <div className="players-list__element"><PlayerCircle {...circle}/></div>;

        return <div className="players-list">
            {this.props.players.map(getPlayerCircle)}
        </div>
    }
}

const PlayersListComponent = connect(mapStateToProps)(PlayersList);

export default PlayersListComponent;
