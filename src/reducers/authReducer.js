import {
    LOGIN_USER,
    AUTH_USER
} from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
                return {...state, loginSuccess: action.payload};
        case AUTH_USER:
            return {...state, authUser: action.payload}
        default:
            return state;
    }
}