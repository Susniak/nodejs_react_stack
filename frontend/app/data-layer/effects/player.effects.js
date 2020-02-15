import {call, takeEvery, put} from 'redux-saga/effects';
import Urls from "../urls";
import {registerUserPush} from "../actions/user-push.actions";
import {ADD_PLAYER_ACTION} from "../actions/player.actions";

function* addPlayer({payload}) {
    const data = yield call(() => fetch(Urls.addPlayer(), {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    }));

    if (!data.error) {
        yield put(registerUserPush("Player was created."));
    } else {
        yield put(registerUserPush(data.error))
    }
}

export default [
    takeEvery(ADD_PLAYER_ACTION, addPlayer),
];
