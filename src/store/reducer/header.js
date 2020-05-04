import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused : false,
    mouseIn : false,
    searchTipList: [],
    searchPage: 0,
    searchTotalPage: 0
});

const header = (state = defaultState, action ) => {
    switch (action.type) {
        case "search_focus":
            // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
            return state.set('focused', true);
        case "search_blur":
            return state.set('focused', false);
        case "get_init_list":
            console.log('action is ?', action);
            return state.set('searchTipList', action.data).set('searchTotalPage', action.searchTotalPage);
        case "mouse_enter":
            return state.set('mouseIn', true);
        case "mouse_leave":
            return state.set('mouseIn', false);
        case "change_page":
            return state.set('searchPage', action.searchPage);
        default:
            return state;
    }
};

export default header;