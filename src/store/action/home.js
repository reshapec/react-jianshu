import axios from 'axios';
import { fromJS } from 'immutable';

const getHomeInitInfoAction = (data) => ({
    type: "get_home_info",
    topicList: fromJS(data.topicList),
    artList: fromJS(data.artList)
});

const getInitWriterListAction = (data) => ({
    type: "get_writer_list",
    authorList: fromJS(data),
    totalPage: Math.ceil(data.length / 2)
});

const addMoreArtListAction = (data, nextPage) => ({
   type: "add_more_article_list",
   data: fromJS(data),
   nextPage: nextPage,
});

export const getHomeInfoAction = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            const data = res.data;
            const action = getHomeInitInfoAction(data);
            dispatch(action);
        })
    }
};

export const getWriterListAction = () => {
    return (dispatch) => {
        axios.get('/api/writer_list.json')
            .then((res)=>{
                const data = res.data;
                const action = getInitWriterListAction(data);
                dispatch(action);
            });
}};

export const changeWriterPageAction = (page) => ({
    type: "change_writer_page",
    page: page
});

export const loadMoreAction = (nextPage) => {
    return (dispatch) => {
        axios.get('/api/load_more.json?page=`nextPage`')
            .then((res)=>{
                const data = res.data;
                const action = addMoreArtListAction(data, nextPage);
                dispatch(action);
        });
}};

export const changeShowTopAction = (flag) => ({
    type: "change_show_top",
    flag
});
