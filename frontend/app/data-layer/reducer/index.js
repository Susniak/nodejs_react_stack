import {combineReducers} from 'redux';

import account from './account';
import userPush from './user-push';

export default combineReducers({
    userPush,
    account
});
