import React, { Component } from "react";
import classnames from 'classnames';
import { connect } from 'react-redux';
import "./header.css"
import navLogo from "../../statics/images/nav-logo.png"
import navBeta from "../../statics/images/nav_beta.png"
import "../../statics/iconfont/iconfont.css";
import { searchFocusAction, searchBlurAction, getSearchTipListAction } from "../../store/action/header";
import { loginOutAction } from "../../store/action/login";
import SearchTip from "../searchTip/searchTip";
import { Link } from "react-router-dom";

class Header extends Component{

    getSearchTip = (show) => {
        if (show){
            return <SearchTip
                    searchTipList={this.props.searchTipList}
                    searchPage={this.props.searchPage}
                    searchTotalPage={this.props.searchTotalPage}
            />
        }else{
            return null
        }
    };

    render() {
        const { login } = this.props;
        return(
            <div className={'container'}>
                <a href="/"><img className={'navLogo'} src={navLogo} alt="nav logo"/></a>
                <div className={'nav'}>
                    <div>首页</div>
                    <div>下载app</div>
                    <div className={'searchWrapper'}>
                        <input
                            onFocus={()=>this.props.handleInputFocus(this.props.searchTipList)}
                            onBlur={this.props.handleInputBlur}
                            className={classnames('navSearch', this.props.focused ? 'focused' : null)}
                            placeholder='搜索'/>
                        <i className={classnames('iconfont', this.props.focused ? 'changeSearchIconfont' : 'searchIconfont')}>&#xe64d;</i>
                        { this.getSearchTip(this.props.focused | this.props.mouseIn) }
                    </div>
                    { login ? <div onClick={()=>this.props.loginOut()}>退出</div> : <div><Link to='/login'>登录</Link></div> }
                    <img src={navBeta} alt="nav beta" />
                    <div className={'rowIconfont'}><i className='iconfont'>&#xe636;</i></div>
                </div>
                <div className={'addition'}>
                    <Link to='/write'><div className={'write'}><i className="iconfont">&#xe6e5;</i>写文章</div></Link>
                    <div className={'register'}>注册</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        mouseIn: state.get('header').get('mouseIn'),
        searchTipList: state.get('header').get('searchTipList'),
        searchPage: state.get('header').get('searchPage'),
        searchTotalPage: state.get('header').get('searchTotalPage'),
        login: state.get('login').get('login')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus (list) {
            list.toJS().length === 0 && dispatch(getSearchTipListAction());
            dispatch(searchFocusAction());
        },
        handleInputBlur () {
            const action = searchBlurAction();
            dispatch(action);
        },
        loginOut () {
            const action = loginOutAction();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);