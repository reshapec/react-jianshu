import React, { Component } from "react";
import "../login/login.css"
import "../../statics/iconfont/iconfont.css"
import {connect} from "react-redux";
//用ref获取dom,把两个dom分别存进this.account和this.password
import { ensureLoginAction } from "../../store/action/login";
import { Redirect } from "react-router-dom";

class Login extends Component {
    render() {
        const { loginstatus} = this.props;
        if (!loginstatus) {
            return (
                <div className={'sign'}>
                    <div className={'main'}>
                        <h4 className={'title'}>
                            <div className={'normalTitle'}>
                                <a className={'active'} href="/sigin_in">登录</a>
                                <b>·</b>
                                <a id="js-sign-up-btn" href="/sign_up">注册</a>
                            </div>
                        </h4>
                        <div className={'signInContainer'}>
                            <div className={'inputPrepend'}><input type="text" placeholder="账号" ref={(input) => {this.account = input}}/><i className="iconfont">&#xe66c;</i></div>
                            <div className={'inputPrepend'}><input type="password" placeholder="密码" ref={(input) => {this.password = input}}/><i className="iconfont">&#xe654;</i></div>
                            <div className={'rememberBtn'}><input type="checkbox" value="true" checked="checked"/><span>记住我</span></div>
                            <button onClick={()=>this.props.Login(this.account, this.password)} className={'signInButton'} type="button">
                                <span>登录</span>
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loginstatus: state.get('login').get('login'),
    }
};

const mapDispatchToProps = (dispatch) => ({
    Login(accountElem, passwordElem) {
        const action = ensureLoginAction(accountElem.value, passwordElem.value);
        dispatch(action);
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);