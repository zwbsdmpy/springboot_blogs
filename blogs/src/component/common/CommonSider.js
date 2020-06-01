import {Layout, Menu} from "antd";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import React, {Component} from "react";
import {connect} from "react-redux";
import {getSiderMenuList} from "../../redux/action/actions";

const {Sider} = Layout;
const {SubMenu} = Menu;

export class CommonSider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            siderMenuList: [],
        };
    }

    componentDidMount() {
        this.init();
    }

    componentWillReceiveProps(nextProps) {
    }

    init = () => {
        let menuList = [
            '所有博客',
            {
                "分类": [
                    "Java",
                    "Spring",
                    "React",
                    "数据库",
                    "算法",
                    "计算机网络",
                    "分布式",
                    "微服务",
                ]
            },
            '个人信息',
        ];
        this.setState({siderMenuList: menuList});
    }

    // 是否折叠左边扩展栏
    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    // 构建左导航栏菜单
    handleSiderMenuList = (siderMenuList) => {
        let menuList = [];
        siderMenuList.map((item) => {
            let menuItem = '';
            if (Array.isArray(item)) {
                item.map((subMenu) => {
                    let subMenuKeys = Object.keys(subMenu);
                    subMenuKeys.map((subMenuKey) => {
                        let subMenuItems = [];
                        subMenu[subMenuKey].map((subMenuItem) => {
                            subMenuItems.push(
                                <Menu.Item key={subMenuItems.length}>{subMenuItem}</Menu.Item>
                            );
                        })
                        let menuItem = (
                            <SubMenu key={menuList.length} title={subMenuKey}>
                                {subMenuItems}
                            </SubMenu>)
                        menuList.push(menuItem);
                    })
                })
                let subMenuName = item
            } else {
                menuItem = (
                    <Menu.Item key={menuList.length}>
                        {item}
                    </Menu.Item>
                )
                menuList.push(menuItem);
            }
        })
        return menuList;
    }

    render() {
        let menuList = '';
        if (this.state.siderMenuList !== []) {
            menuList = this.handleSiderMenuList(this.state.siderMenuList);
        }
        return (
            <Sider collapsible="true" collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo"/>

                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined/>}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined/>}>
                        Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined/>}/>
                </Menu>
                {menuList}
            </Sider>
        )
    }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {

}

export default connect((state) => {
     menuList: {state}
})(CommonSider);
