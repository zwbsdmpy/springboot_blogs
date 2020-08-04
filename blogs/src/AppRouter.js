import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import Home from "./component/ManagerView";
import LoginView from "./component/login/LoginView";
import IndexView from "./component/index/IndexView";


export default class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={IndexView}/>
                <Route path="/login" exact component={LoginView}/>
                <Route path="/manager" exact component={Home}/>
            </BrowserRouter>
        )
    }
}

