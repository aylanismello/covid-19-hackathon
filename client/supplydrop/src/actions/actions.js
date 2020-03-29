export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currUser => ({
    type: RECEIVE_CURRENT_USER,
    currUser
});
