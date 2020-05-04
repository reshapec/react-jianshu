import { fromJS } from 'immutable';

const defaultState = fromJS({
    login: false
});

const login = (state = defaultState, action ) => {
    switch (action.type) {
        case "CHANGE_LOGIN_STATUS":
            return state.set('login', action.data);
        case "SET_LOGIN_STATUS_EQUAL_FALSE":
            return state.set('login', action.data);
        default:
            return state;
    }
};

export default login;