import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Layout} from 'antd';
import {CommonFooter} from "./common/CommonFooter.jsx";
import {CommonHeader} from "./common/CommonHeader.jsx";
import {CommonSider} from "./common/CommonSider.jsx";

const {Content} = Layout;

export default class ManagerView extends Component {
    componentDidMount() {
    }

    render() {
        const userData = this.props.userData;
        console.log(userData);
        return (
            <Layout style={{minHeight: '100vh'}}>
                <CommonSider/>
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
