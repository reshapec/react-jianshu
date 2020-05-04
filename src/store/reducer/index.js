import { combineReducers } from 'redux-immutable'; // redux-immutable使大的reducer变成immutable对象
import header from './header';
import home from './home';
import login from './login';

const reducer = combineReducers({
    header: header,
    home: home,
    login: login
});

export default reducer;
