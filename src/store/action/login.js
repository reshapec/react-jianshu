import axios from 'axios';

export const changeLoginStatusAction = (data) => ({
    type: "CHANGE_LOGIN_STATUS",
    data: data
});

export const ensureLoginAction = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account={account}&password={password}')
            .then((res) => {
                const data = res.data.data;
                const action = changeLoginStatusAction(data);
                dispatch(action);
              }
            );
    }};

export const loginOutAction = () => ({
    type: "SET_LOGIN_STATUS_EQUAL_FALSE",
    data: false
});