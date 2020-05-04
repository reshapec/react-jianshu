import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { loadMoreAction } from "../../../store/action/home"
import "./list.css"
import { Link } from "react-router-dom";  // 本次开发的简书项目是一个单页面应用

class List extends Component {
    render() {
        const { artList, artPage } = this.props;
        const JSList = artList.toJS();

        return (
            <Fragment>
                <div>
                    { JSList.map((item, index)=> {
                            return (
                                <Link to="/detail">
                                    <div key={index} className={'listContainer'}>
                                        <img src={item.imgUrl} alt="" />
                                        <div className={'listContext'}>
                                            <span className={'title'}>{item.title}</span>
                                            <p className={'abstract'}>{item.abstract}</p>
                                            <div>
                                                <span className={'watch'}><i className='iconfont'>&#xe60c;</i>{item.watch}</span>
                                                <span className={'nickName'}>{item.nickName}</span>
                                                <span className={'comments'}><i className='iconfont'>&#xe628;</i>{item.comments}</span>
                                                <span className={'like'}><i className='iconfont'>&#xe614;</i>{item.like}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    )}
                </div>
                <div className={'loadMore'} onClick={()=>this.props.getLoadMore(artPage)}>阅读更多</div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        artList: state.get('home').get('artList'),
        artPage: state.get('home').get('artPage'),
    }
};

const mapDispatchToProps = (dispatch) => ({
    getLoadMore(artPage){
        const action =  loadMoreAction(artPage+1);
        dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);