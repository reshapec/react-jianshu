import React, { Component } from "react";
import { connect } from 'react-redux';
import "./topic.css"

class Topic extends Component {
    render() {
        const { topicList } = this.props;
        const JSList = topicList.toJS();

        return (
            <div className={'topicWrapper'}>
                { JSList.map((item)=>{
                    return <div key={item.id} className={'name'}><img src={item.url} alt={item.title}/>{item.title}</div>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.get('home').get('topicList'),
    }
};

export default connect(mapStateToProps, null)(Topic);




