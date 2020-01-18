import React, {Component} from "react";

export default class Header extends Component {
    render() {
        return (
            <div className="row">
                {/*头像账户显示*/}
                <div className="col-md-2">
                    <img/>
                    <a href="/login">游客</a>
                </div>

                <div className="col-md-4"><a href="/login">分类</a></div>
                <div className="col-md-4"><a href="/login">热门文章</a></div>
                <div className="col-md-2">
                    <a href="/login">登录</a>/<a href="/register">注册</a>
                </div>
            </div>
        );
    }
}