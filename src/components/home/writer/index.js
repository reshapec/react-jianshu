import React, { Component } from "react";
import { connect } from 'react-redux';
import { getWriterListAction, changeWriterPageAction } from "../../../store/action/home"
import "./write.css"

class Writer extends Component {

    render() {
        const { authorList, page, totalPage } = this.props;
        const JSList = authorList.toJS();
        const pageList = [];

        if (JSList.length)
            for (let i = page * 2 ; i < (page + 1) * 2 ; i++){
                if (JSList[i]){pageList.push(JSList[i])}
            }
        // console.log('pageList is ?', pageList);

        return (
            <div className={'recommendedAuthorWrap'}>
                <div className={'title'}>
                    <span className={'author'}>推荐作者</span>
                    <span className={'pageChange'} onClick={()=>this.props.handlePageChange(page, totalPage)}>
                        <i className='iconfont'>&#xe851;</i>换一批
                    </span>
                </div>
                { pageList.map((item)=>{
                    return (
                        <div key={item.id} className={'list'}>
                            <div className={'container'}>
                                <img src={item.imgUrl} alt="" />
                                <span className={'follow'}><i className='iconfont'>&#xe62f;</i>关注</span>
                                <span className={'name'}>{item.name}</span>
                                <p className={'detail'}> {item.detail}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    componentDidMount () {
        this.props.GetWriterList();
    }
}

const mapStateToProps = (state) => {
    return {
        authorList: state.get('home').get('authorList'),
        page: state.get('home').get('page'),
        totalPage: state.get('home').get('totalPage'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetWriterList () {
            const action = getWriterListAction();
            dispatch(action);
        },
        handlePageChange (page, totalPage) {
            // console.log(page, totalPage);
            if (page < totalPage -1){
                dispatch(changeWriterPageAction(page+1))
            }else{
                dispatch(changeWriterPageAction(0))
            }
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Writer);