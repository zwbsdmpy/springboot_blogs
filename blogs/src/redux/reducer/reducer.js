import * as actionType from '../action/actionType'
import {combineReducers} from "redux";
import * as actions from "../action/actions";

/**
 * 处理action
 * 传入previousState以及对应要处理的action，返回newState
 *
 * @param state
 * @param action
 * @returns {*[]|any}
 */
const mainView = (state = [], action) => {
    switch (action.type) {
        case actionType.LOGIN:
            return state;
        case actionType.SIDER_MENU_LIST:
            return actions.getSiderMenuList(action);
        default:
            return state;
    }
}

/**
 * 注册所有reducer
 */
export const getReducer = combineReducers({
    mainView
})
