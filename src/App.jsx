import React from "react";
import ReactDOM from "react-dom";

import {RecoilRoot} from "recoil";
const Header = React.lazy(() => import("exports_app/Header"));
import Input from "./Input";
import "./index.css";

const App = () => {
    return (
        <RecoilRoot>
            Hi there, I'm Consumer App.
            <React.Suspense fallback={<div/>}>
                <Header/>
            </React.Suspense>
            <Input />
        </RecoilRoot>);
}

ReactDOM.render(<App />, document.getElementById("app"));
