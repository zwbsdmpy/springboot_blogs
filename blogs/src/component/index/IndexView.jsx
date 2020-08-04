import React, {Component} from "react";
import "./index.css";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import WechatOutlined from "@ant-design/icons/lib/icons/WechatOutlined";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";

export default class IndexView extends Component {
    render() {
        return (
            <div className="page">
                <div className="content">
                    <p>Skin's Ghost Blog</p>
                    <GithubOutlined/>
                    <WechatOutlined/>
                    <GoogleOutlined/>
                </div>
                <div className="footer">Ant Design ©2020 Created by zwbsdmpy</div>
            </div>
        )
    }
}
