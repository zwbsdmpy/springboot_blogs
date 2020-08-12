import React, {Component} from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from "react-router-dom";


export default class LoginView extends Component {
    state = {
        userData: {},
        account: "",
        password: "",
        Logging: false,
        isLogin: false,
    };

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        this.setState({userData: nextProps.userData});
    }

    handleNameChange = (event) => {
        const account = event.target.value;
        this.setState({account});
    };

    handlePasswordChange = (event) => {
        const password = event.target.value;
        this.setState({password});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {"account": this.state.account, "password": this.state.password};
        this.props.login(user);
        if (this.state.userData !== {}) {
            const isLogin = true;
            this.setState({isLogin});
        }
    };

    render() {
        const {userData, isLogin, Logging} = this.state;
        let view = '';
        if (!isLogin) {
            view =
                <div className=".container-fluid">
                    <div className="text-center align-items-center">
                        <div className="logo text-uppercase">
                            <span>SKIN.</span>
                            <strong className="text-primary">BLOG</strong>
                        </div>
                        {/*<div className="text-center">*/}
                        {/*    人类的悲欢并不相通*/}
                        {/*    我只觉得他们吵闹*/}
                        {/*</div>*/}
                        <form className="text-center">
                            <div className="form-group-material">
                                <label htmlFor="userAccount" className="label-material">账号&nbsp;</label>
                                <input id="userAccount" type="text" name="userAccount" required data-msg="请输入用户名"
                                       className="input-material" onChange={this.handleNameChange}/>
                            </div>
                            <div className="form-group-material">
                                <label htmlFor="password" className="label-material">密码&nbsp;</label>
                                <input id="password" type="password" name="loginPassword" required data-msg="请输入密码"
                                       className="input-material" onChange={this.handlePasswordChange}/>
                            </div>
                            <div className="form-group text-center">
                                <input type="submit" id="login" className="btn btn-primary" value="登录"
                                       onClick={this.handleSubmit}/>
                            </div>
                        </form>
                        忘记密码？
                        < small> 没有账号？ </small>注册
                    </div>
                </div>
        } else if (!Logging) {
            view = <div> LOADING...</div>
        }
        if (userData !== {} && isLogin) {
            view = <Link to='/Manager'/>
        }
        return (
            view
        )
    }
}
