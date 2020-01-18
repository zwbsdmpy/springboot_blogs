import React, {Component} from "react";

export default class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    };

    handleNameChange = (event) => {
        console.log("handleNameChange");
        const userName = event.target.value;
        this.setState({userName});
    };

    handlePasswordChange = (event) => {
        console.log("handleContentChange");
        const password = event.target.value;
        this.setState({password});
    };

    handleSubmit = (event) => {

    };

    render() {
        return (
            <div>
                <form className="text-left form-validate">
                    <div className="form-group-material">
                        <input id="userAccount" type="text" name="userAccount" required data-msg="请输入用户名"
                               className="input-material" onChange={this.handleNameChange}/>
                        <label htmlFor="userAccount" className="label-material">账号</label>
                    </div>

                    <div className="form-group-material">
                        <input id="password" type="password" name="loginPassword" required data-msg="请输入密码"
                               className="input-material" onChange={this.handlePasswordChange}/>
                        <label htmlFor="password" className="label-material">密码</label>
                    </div>

                    <div className="form-group text-center">
                        <input type="submit" id="login" className="btn btn-primary" value="登录"
                               onClick={this.handleSubmit}/>
                    </div>
                </form>
            </div>
        )
    }
}