import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "normalize.css";
import "./css/global.css";
import "./css/media-query.css";
import "./css/flexboxgrid.css";

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
