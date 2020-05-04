import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    artList : [],
    artPage : 1,
    authorList : [],
    page : 0,
    totalPage : 0,
    showBackTop: false
});

const home = (state = defaultState, action ) => {
    switch (action.type) {
        case "get_home_info":
            return state.merge({
                topicList: action.topicList,
                artList: action.artList,
            });
        case "get_writer_list":
            return state.merge({
                authorList: action.authorList,
                totalPage: action.totalPage,
            });
        case "change_writer_page":
            return state.set('page', action.page);
        case "add_more_article_list":
            return state.merge({
                artList: state.get('artList').concat(action.data),
                artPage: action.nextPage,
            });
        case "change_show_top":
            console.log('action is ?', action);
            return state.set('showBackTop', action.flag);
        default:
            return state;
    }
};

export default home;