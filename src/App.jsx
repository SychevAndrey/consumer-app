import React from "react";
import ReactDOM from "react-dom";

import {RecoilRoot} from "recoil";
import Header from "exports_app/Header";
import Input from "./Input";
import "./index.css";

const App = () => {
    return (
        <RecoilRoot>
            Hi there, I'm Consumer App.
            <Header/>
            <Input />
        </RecoilRoot>);
}

ReactDOM.render(<App />, document.getElementById("app"));
