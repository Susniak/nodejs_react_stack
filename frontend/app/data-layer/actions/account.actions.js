export const GET_ACCOUNT_ACTION = "GET_ACCOUNT_ACTION";
export const LOGIN_ACTION = "LOGIN_ACTION";
export const VERIFY_TOKEN_ACTION = "VERIFY_TOKEN_ACTION";
export const LOGOUT_ACCOUNT_ACTION = "LOGOUT_ACTION";
export const CREATE_ACCOUNT = "CREATE_ACCOUNT";

export const getUser = payload => ({
    type: GET_ACCOUNT_ACTION,
    payload
});

export const login = payload => ({
    type: LOGIN_ACTION,
    payload
});

export const verifyToken = (payload) => ({
    type: VERIFY_TOKEN_ACTION,
    payload
});

export const logout = () => ({
    type: LOGOUT_ACCOUNT_ACTION
});

export const createAccount = data => ({
    type: CREATE_ACCOUNT,
    payload: data
})
