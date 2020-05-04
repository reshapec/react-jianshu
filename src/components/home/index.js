import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomeInfoAction, changeShowTopAction } from "../../store/action/home";
import "./home.css"
import banner from "../../statics/images/banner.png";
import List from "./list";
import Recommand from "./recommand";
import Writer from "./writer";
import Topic from "./topic";
import Download from "./download";
import BackTop from "./backtop";

class Home extends Component {

    render() {
        return (
          <div className={'homeWrapper'}>
              <div className={'homeLeft'}>
                  <img className={'homeLeftBanner'} src={banner} alt="元宵徽章"/>
                  <Topic />
                  <List />
              </div>
              <div className={'homeRight'}>
                  <Recommand />
                  <Download />
                  <Writer />
              </div>
              {this.props.showBackTop ? <BackTop /> : null }
          </div>
        )
    }

    componentDidMount() {
        this.props.getHomeInfo();
        window.addEventListener('scroll', this.props.changeShowTop);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.props.changeShowTop);
    }

}

const mapStateToProps = (state) => ({
    showBackTop: state.getIn(['home', 'showBackTop'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        getHomeInfo() {
            const action = getHomeInfoAction();
            dispatch(action);
        },
        changeShowTop(e){
            if(document.documentElement.scrollTop > 100){
                dispatch(changeShowTopAction(true));
            }else{
                dispatch(changeShowTopAction(false));
            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);