import {createStore} from 'redux'
import {getReducer} from "../reducer/reducer";


export const store = createStore(getReducer)
