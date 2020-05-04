import React, { Component } from "react";
import "./searchTip.css"
import { connect } from "react-redux";
import { mouseEnterAction, mouseLeaveAction, changePageAction } from "../../store/action/header";
import classnames from "classnames";

class SearchTip extends Component {

    render() {
        const { searchTipList, searchPage, searchTotalPage  } = this.props;
        const JSList = searchTipList.toJS();
        const pageList = [];

        if (JSList.length)
        for (let i = searchPage * 10 ; i < (searchPage + 1) * 10 ; i++){
            if (JSList[i]){pageList.push(JSList[i])}
        }

        return (
            <div className={'searchTipContainer'}
                 onMouseEnter={this.props.handleMouseEnter}
                 onMouseLeave={this.props.handleMouseLeave}
            >
                <span className={'searchTipTitle'}>热门搜索</span>
                <span className={'searchTipSwitch'}
                      onClick={() => {this.props.handleChangePage(searchPage, searchTotalPage)}}
                >
                    <i className={classnames('iconfont', 'iconfontPage')}>&#xe851;</i>换一批
                </span>
                <div className={'searchTipTagWrap'}>
                    { pageList.map((item)=>{
                        return <span key={item} className={'searchTipItem'}>{item}</span>;
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mouseIn: state.get('header').get('mouseIn'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleMouseEnter () {
            const action = mouseEnterAction();
            dispatch(action);
        },
        handleMouseLeave () {
            const action = mouseLeaveAction();
            dispatch(action)
        },
        handleChangePage (searchPage, searchTotalPage) {
            // console.log(searchPage, searchTotalPage);
            if (searchPage < searchTotalPage -1){
                dispatch(changePageAction(searchPage + 1));
            }else{
                dispatch(changePageAction(0));
            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTip);