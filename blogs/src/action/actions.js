import * as actionType from './actionType.js'

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
