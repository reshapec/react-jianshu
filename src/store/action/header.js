import axios from 'axios';
import { fromJS } from 'immutable';

const getInitListAction = (data) => ({
    type: "get_init_list",
    data: fromJS(data),
    searchTotalPage: Math.ceil(data.length / 10)
});

export const searchFocusAction = () => ({
    type: "search_focus"
});

export const searchBlurAction = () => ({
    type: "search_blur"
});

export const mouseEnterAction = () => ({
    type: "mouse_enter"
});

export const mouseLeaveAction = () => ({
    type: "mouse_leave"
});

export const changePageAction = (searchPage) => ({
    type: "change_page",
    searchPage: searchPage
});

export const getSearchTipListAction = () => {
    return (dispatch) => {
        axios.get('/api/search_tip_list.json')
            .then((res)=>{
                const data = res.data;
                const action = getInitListAction(data);
                dispatch(action);});
}};



