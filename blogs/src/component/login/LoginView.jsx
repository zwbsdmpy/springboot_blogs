import React, {Component} from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css'


export default class LoginView extends Component {
    state = {
        userData: {},
        username: "",
        password: ""
    };

    componentDidMount() {
    }

    handleNameChange = (event) => {
        const userName = event.target.value;
        this.setState({userName});
    };

    handlePasswordChange = (event) => {
        const password = event.target.value;
        this.setState({password});
    };

    //TODO: 修改能够感知到响应
    handleSubmit = () => {
        const user = {"userName": this.state.userName, "password": this.state.password};
        this.props.login(user);
        while (this.props.userData || this.props.userData.empty) {
            //TODO: 添加等待跳转缓冲特效
            console.log("loading message")
        }
        const userData = this.props.userData;
        this.setState({userData})
        // TODO：添加重定向到管理面
        console.log("handleSubmit" + JSON.stringify(this.state.userData));
    };

    render() {
        console.log("render" + JSON.stringify(this.state.userData));
        return (
            <div className=".container-fluid">
                <div className="text-center align-items-center">
                    <div className="logo text-uppercase">
                        <span>SKIN.</span>
                        <strong className="text-primary">BLOG</strong>
                    </div>
                    <div className="text-center">
                        人类的悲欢并不相通
                        我只觉得他们吵闹
                    </div>
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
        )
    }
}
