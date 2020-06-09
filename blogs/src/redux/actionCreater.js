import * as actionType from './actionType.js'
import axios from "axios";

const baseUrl = "http://localhost:8080"
/**
 * 创建登录action
 * @param user
 * @returns {{data: object, type: string}}
 */
export const login = (user) => {
    return {
        type: actionType.LOGIN,
        data: user,
    }
}

export const getSiderDataAction = () => {
    return (dispatch) => {
        axios.get(baseUrl + '/rest/blogs/siderMenuList').then(
            (res) => {
                if (res.status === 200) {
                    const siderData = res.result;
                    dispatch({
                        type: actionType.SIDER_MENU_LIST,
                        siderData,
                    })
                }
            }
        ).catch(
            () => {
                alert("首页数据请求失败！")
            }
        )
    }
};
