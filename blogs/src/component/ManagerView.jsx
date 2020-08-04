import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Layout} from 'antd';
import {CommonFooter} from "./common/CommonFooter.jsx";
import {CommonHeader} from "./common/CommonHeader.jsx";
import {CommonSider} from "./common/CommonSider.jsx";
import {connect} from 'react-redux'
import * as action from "../redux/actionCreater";

const {Content} = Layout;

class Home extends Component {
    componentDidMount() {
        this.props.login({
            "account": "zwbsdmpy",
            "password": "zwbsdmpy"
        });
    }

    render() {
        const userData = this.props.userData;
        console.log(userData);
        return (
            <Layout style={{minHeight: '100vh'}}>
                <CommonSider />
                <Layout className="site-layout">
                    <CommonHeader/>
                    <Content style={{margin: '0 16px'}}>
                    </Content>
                    <CommonFooter/>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.mainView.userData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login(user) {
            dispatch(action.login(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
