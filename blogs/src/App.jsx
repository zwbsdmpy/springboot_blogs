import React from 'react';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import AppRouter from "./AppRouter";

// 总入口
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        )
    }
}
