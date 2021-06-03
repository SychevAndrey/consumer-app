import React from "react";
import ReactDOM from "react-dom";

import Header from "exports_app/Header";
import "./index.css";

const App = () => <div>Hi there, I'm Consumer App. <Header/></div>;

ReactDOM.render(<App />, document.getElementById("app"));
