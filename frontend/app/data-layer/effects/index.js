import { all } from 'redux-saga/effects'

import AccountSaga from './account.effects';
import PlayerSaga from './player.effects';
import UserPushSaga from './user-push.effects';

export default function* rootSaga() {
    yield all([...AccountSaga, ...PlayerSaga, ...UserPushSaga])
}
