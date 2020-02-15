import {LOGIN_ACTION, LOGOUT_ACCOUNT_ACTION} from "../actions/account.actions";
import {ADD_PLAYER_ACTION} from "../actions/player.actions";

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PLAYER_ACTION:
            return {
                token: state.token,
                userData: {
                    ...state.userData,
                    players: [
                        ...state.userData.players,
                        {
                            ...payload,
                            level: 1
                        }
                    ]
                }
            };
        case LOGIN_ACTION:
            return payload;
        case LOGOUT_ACCOUNT_ACTION:
            return {};
        default:
            return state;
    }
};
