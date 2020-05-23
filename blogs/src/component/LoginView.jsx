import React, {Component} from "react";
//
// import "../css/style.default.css";
// import "../css/bootstrap.css"

// import LoginForm from "./form/Form";

export default class LoginView extends Component {
    render() {
        return (
            <div className="page login-page">
                <div className="container">
                    <div className="form-outer text-center d-flex align-items-center">
                        <div className="form-inner">
                            <div className="logo text-uppercase">
                                <span>SKIN.</span>
                                <strong className="text-primary">BLOG</strong>
                            </div>
                            <p>人类的悲欢并不相通 我只觉得他们吵闹</p>
                            {/*<LoginForm/>*/}
                            <a href="#" className="forgot-pass">忘记密码？</a>
                            < small> 没有账号？ </small><a href="register.html" className="signup">注册</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
