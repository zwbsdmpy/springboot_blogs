import {applyMiddleware, compose, createStore} from 'redux'
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

import {getReducer} from "../reducer/reducer";

export const store = createStore(getReducer, composeWithDevTools(applyMiddleware(thunk)))
