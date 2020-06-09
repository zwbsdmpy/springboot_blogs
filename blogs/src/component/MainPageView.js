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

class MainPageView extends Component {
    componentDidMount() {
        this.props.getSiderMenuData();
    }

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

const mapDispatchToProps = (dispatch) => {
    return {
        getSiderMenuData() {
            dispatch(action.getSiderDataAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageView);
