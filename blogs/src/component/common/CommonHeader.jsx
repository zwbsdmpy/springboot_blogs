import React, {Component} from 'react';
import {Badge, Col, Menu, Row} from 'antd';
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import AppstoreOutlined from "@ant-design/icons/lib/icons/AppstoreOutlined";
import SettingOutlined from "@ant-design/icons/lib/icons/SettingOutlined";
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

const {SubMenu} = Menu;

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
            <div className='header'>
                <Row>
                    <Col span={18}>
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="mail" icon={<MailOutlined/>}>
                                Navigation One
                            </Menu.Item>
                            <Menu.Item key="app" icon={<AppstoreOutlined/>}>
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
                    </Col>
                    <Col span={6}>
                        <Col span={6}>
                        <span className="avatar-item">
                         <Badge count={1}>
                         <Avatar shape="square" size='large' icon={<UserOutlined/>}/>
                         </Badge>
                        </span>
                        </Col>
                        <Col span={6}>
                            <h4><Link to='/login'>登录</Link>/注册</h4>
                        </Col>
                    </Col>
                </Row>
            </div>
        )
    }
}
