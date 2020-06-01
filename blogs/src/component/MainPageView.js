import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Breadcrumb, Layout} from 'antd';
import {CommonFooter} from "./common/CommonFooter";
import {CommonHeader} from "./common/CommonHeader";
import CommonSider from "./common/CommonSider";

const {Content} = Layout;

export default class MainPageView extends Component {
    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <CommonSider/>
                <Layout className="site-layout">
                    <CommonHeader/>
                    <Content style={{margin: '0 16px'}}>
                        <div id='content' className="site-layout-background" style={{padding: 24, minHeight: 360}}>

                        </div>
                    </Content>
                    <CommonFooter/>
                </Layout>
            </Layout>
        );
    }
}
