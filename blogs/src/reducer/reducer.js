import * as actionType from '../action/actionType'
import {combineReducers} from "redux";

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
            return Object.assign({}, state, action);
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
