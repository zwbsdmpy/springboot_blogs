import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Layout, Breadcrumb} from 'antd';

import {CommonSider} from "./common/CommonSider";
import {CommonHeader} from "./common/CommonHeader";
import {CommonFooter} from "./common/CommonFooter";

const {Content} = Layout;

export default class MainPageView extends Component {
    state = {};

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <CommonSider/>
                <Layout className="site-layout">
                    <CommonHeader/>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <CommonFooter/>
                </Layout>
            </Layout>
        );
    }
}
