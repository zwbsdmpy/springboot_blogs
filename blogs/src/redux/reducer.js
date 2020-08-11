import * as actionType from './actionType'
import {combineReducers} from "redux";
import * as actions from "./actionCreater";

const initState = {
    userData: {},
    siderMenuList: [
        {'所有博客': {}},
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
        {'个人信息': {}},
    ],
}
/**
 * 处理action
 * 传入previousState以及对应要处理的action，返回newState
 *
 * @param state
 * @param action
 * @returns {*[]|any}
 */
const mainView = (state = initState, action) => {
    switch (action.type) {
        case actionType.LOGIN:
            return state;
        case actionType.USER_DATA:
            state.userData = action.userData;
            return state;
        default:
            return state;
    }
}

/**
 * 注册所有reducer
 */
export const getReducer = combineReducers({
    mainView,
})
