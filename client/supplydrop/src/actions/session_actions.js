import * as APIUtil from '../utils/session_api_utils'
import jwt_decode from 'jwt_decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const receiveCurrentUser = currUser => ({
    type: RECEIVE_CURRENT_USER,
    currUser
});

export const receiveUserSignIn = data => ({
     type: RECEIVE_USER_SIGN_IN,
     data
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const signup = user => dispatch => {
    APIUtil.signup(user)
    .then(data => dispatch(receiveUserSignIn(data)))
    .catch( err => dispatch(receiveErrors(err.response.data)))
};

export const login = user => dispatch => (
    APIUtil.login(user)
    .then( res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch( err => {
        dispatch(receiveErrors(err.response.data));
    })
)

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};