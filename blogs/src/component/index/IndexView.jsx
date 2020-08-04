import React, {Component} from "react";
import "./index.css";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import WechatOutlined from "@ant-design/icons/lib/icons/WechatOutlined";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import {Link} from "react-router-dom";

export default class IndexView extends Component {
    render() {
        return (
            <div className="page">
                <div className="content">
                    <div className="row">Skin's Ghost Blog</div>
                    <div className="row">
                        <div className="col-3"><GithubOutlined/></div>
                        <div className="col-3"><WechatOutlined/></div>
                        <div className="col-3"><GoogleOutlined/></div>
                    </div>
                    <button><Link to="/manager">Enter the </Link></button>
                </div>
                <div className="footer">©2020 Created by zwbsdmpy</div>
            </div>
        )
    }
}
