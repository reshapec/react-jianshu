import React, { Component } from "react";
import "./download.css"

class Download extends Component {
    render() {
        return (
            <div className={'download'}>
                <img className={'code'} src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
                <div className={'info'}>
                    <div className={'title'}>下载简书手机App</div>
                    <div className={'description'}>随时随地发现和创作内容</div>
                </div>
            </div>
        )
    }
}

export default Download;