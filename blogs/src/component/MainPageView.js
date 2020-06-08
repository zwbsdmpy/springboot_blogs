import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Layout} from 'antd';
import {CommonFooter} from "./common/CommonFooter.jsx";
import {CommonHeader} from "./common/CommonHeader.jsx";
import {CommonSider} from "./common/CommonSider.jsx";
import {connect} from 'react-redux'

const {Content} = Layout;

class MainPageView extends Component {
    render() {
        const siderData = this.props.siderMenuList;
        return (
            <Layout style={{minHeight: '100vh'}}>
                <CommonSider siderData={siderData}/>
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
        siderMenuList: state.mainView.siderMenuList
    }
}
export default connect(mapStateToProps, null)(MainPageView);
