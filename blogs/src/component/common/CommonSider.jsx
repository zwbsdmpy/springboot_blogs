import {Layout, Menu} from "antd";
import React, {Component} from "react";
import {connect} from 'react-redux'

const {Sider} = Layout;
const {SubMenu} = Menu;

/**
 * TODO: 数据库中存储每个用户的列表信息以及图标
 */
export class CommonSider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            key: 0,
        };
    }

    componentDidMount() {
    }

    // 是否折叠左边扩展栏
    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    // 构建左导航栏菜单
    handleSiderMenuList = (siderMenuList) => {
        let menuList = [];
        let key = 0;
        siderMenuList.map((item) => {
            let menuItem = [];
            if (Array.isArray(item)) {
                item.map((subMenu) => {
                    let subMenuKeys = Object.keys(subMenu);
                    subMenuKeys.map((subMenuKey) => {
                        let subMenuItems = [];
                        subMenu[subMenuKey].map((subMenuItem) => {
                            subMenuItems.push(
                                <Menu.Item key={key++}>{subMenuItem}</Menu.Item>
                            );
                        })
                        let menuItem = (
                            <SubMenu key={key++} title={subMenuKey}>
                                {subMenuItems}
                            </SubMenu>)
                        menuList.push(menuItem);
                    })
                })
                let subMenuName = item
            } else {
                menuItem = (
                    <Menu.Item key={key++}>
                        {item}
                    </Menu.Item>
                )
                menuList.push(menuItem);
            }
        })
        return menuList;
    }

    handleSubMenu = (content, key) => {
        return (
            <Menu.Item key={key++}>
                {content}
            </Menu.Item>
        )
    }

    handleMenuItem = () => {

    }

    render() {
        let siderData = this.props.siderData;
        return (
            <Sider collapsible="true" collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        所有博客
                    </Menu.Item>
                    <SubMenu key="sub1" title="分类">
                        <Menu.Item key="2">Java</Menu.Item>
                        <Menu.Item key="3">Spring</Menu.Item>
                        <Menu.Item key="4">React</Menu.Item>
                        <Menu.Item key="5">数据库</Menu.Item>
                        <Menu.Item key="6">算法</Menu.Item>
                        <Menu.Item key="7">计算机网络</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="8">个人信息</Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        siderMenuList: state.mainView.siderMenuList
    }
}

export default connect(mapStateToProps)(CommonSider);
