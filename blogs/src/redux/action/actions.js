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

export const getSiderMenuList = () => {
    console.log("axios mock start");
    axios.get('/rest/blogs/siderMenuList', {dataType: 'json'}) //这列的'/mock'与mock.js文件里的地址一致
        .then(res => {
            console.log("axios mock result:" + res.data);
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}
