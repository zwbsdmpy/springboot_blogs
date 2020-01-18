import React, {Component} from "react";
import "../css/bootstrap.css"
import Header from "./header/header";
import Main from "./content/content";
import Footer from "./footer/footer";

export default class Index extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}