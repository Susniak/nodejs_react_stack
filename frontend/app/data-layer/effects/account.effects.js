import {call, takeEvery, put} from 'redux-saga/effects';
import {GET_ACCOUNT_ACTION, login, VERIFY_TOKEN_ACTION, verifyToken, LOGOUT_ACCOUNT_ACTION} from "../actions/account.actions";
import Urls from "../urls";
import {registerUserPush} from "../actions/user-push.actions";

function* getAccountEffect({payload}) {
    const data = yield call(() => fetch(Urls.getAccount(payload)).then(response => response.json()));

    if (!data.error) {
        yield put(verifyToken({
            token: data.token
        }));
        yield put(registerUserPush("Logged to account."));
    } else {
        yield put(registerUserPush(data.error))
    }
}

function* verifyTokenEffect({payload}) {
    const token = payload && payload.token ? payload.token : localStorage.getItem('token');

    if (token) {
        const userData = yield call(() => fetch(Urls.verifyAccount(token)).then(response => response.json()));
        console.log(userData)
        localStorage.setItem('token', userData.token);

        yield put(login({
            token: userData.token,
            userData: userData.data
        }));
    }
}

function* logoutEffect() {
    localStorage.removeItem('token');
    yield put(registerUserPush("Logged out from account."));
}

export default [
    takeEvery(GET_ACCOUNT_ACTION, getAccountEffect),
    takeEvery(LOGOUT_ACCOUNT_ACTION, logoutEffect),
    takeEvery(VERIFY_TOKEN_ACTION, verifyTokenEffect),
];
