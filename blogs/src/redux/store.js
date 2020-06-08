import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

import {getReducer} from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));


export const store = createStore(getReducer, enhancer)
