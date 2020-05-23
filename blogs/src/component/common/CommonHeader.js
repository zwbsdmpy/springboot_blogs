import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import AppstoreOutlined from "@ant-design/icons/lib/icons/AppstoreOutlined";
import SettingOutlined from "@ant-design/icons/lib/icons/SettingOutlined";

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

export class CommonHeader extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined/>}>
                    Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled icon={<AppstoreOutlined/>}>
                    Navigation Two
                </Menu.Item>
                <SubMenu icon={<SettingOutlined/>} title="Navigation Three - Submenu">
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </Menu.Item>
            </Menu>
        )
    }
}

