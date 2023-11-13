import React from "react";
import { ReactDOM } from "react";
import App from "./App.jsx";
import Card from "./components/Card.js";
import "./index.css";
import CreateTodo from "./components/CreateTodo.jsx";

ReactDOM.CreateRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreateTodo />
  </React.StrictMode>
);
