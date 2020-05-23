import {BrowserRouter, Route} from "react-router-dom";
import Login from "./container/Login";
import React from "react";
import MainPage from "./container/MainPage";

export default () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={MainPage}/>
            <Route path="/login" component={Login}/>
        </BrowserRouter>
    )
}


