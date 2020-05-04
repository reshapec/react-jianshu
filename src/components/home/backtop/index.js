import React, { Component, Fragment } from "react";
import classnames from "classnames";
import "../../../statics/iconfont/iconfont.css"
import "./backtop.css"

class BackTop extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPrompt: false
        }
    }

    handleScollTop = () => {
        window.scrollTo(0, 0);
    };

    handleMouseEnter = () => {
        this.setState({
            showPrompt: true
        })
    };

    handleMouseLeave = () => {
        this.setState({
            showPrompt: false
        })
    };

    render() {
        return(
            <Fragment>
                <div className={'backTop'}
                     onClick={this.handleScollTop}
                     onMouseEnter={this.handleMouseEnter}
                     onMouseLeave={this.handleMouseLeave}
                >
                    <i className={classnames('iconfont', 'icBackTop')}>&#xe631;</i>
                </div>
                { this.state.showPrompt ? <span className={'prompt'}>回到顶部</span> : null }
            </Fragment>
        )
    }
}

export default BackTop;