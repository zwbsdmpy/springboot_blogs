import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import Manager from "./container/Manager";
import Login from "./container/Login";
import IndexView from "./component/index/IndexView";


export default class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={IndexView}/>
                <Route path="/login" exact component= {Login}/>
                <Route path="/manager" exact component={Manager}/>
            </BrowserRouter>
        )
    }
}

