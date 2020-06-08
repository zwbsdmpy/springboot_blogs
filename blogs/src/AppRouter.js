import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import MainPage from "./component/MainPageView";
import LoginView from "./component/LoginView";


export default class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={MainPage}/>
                <Route path="/login" component={LoginView}/>
            </BrowserRouter>
        )
    }
}

