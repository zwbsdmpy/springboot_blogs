import * as actionType from './actionType.js'
import axios from "axios";

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

export const getSiderDataAction = () => ({
    type: actionType.SIDER_MENU_LIST
})
