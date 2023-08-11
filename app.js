import React from "react";
import ReactDOM from "react-dom/client";
let createParent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "heading1" }, "H1 heading updated"),
  React.createElement(
    "div",
    {},
    React.createElement("h2", { id: "heading2" }, "H2 heading")
  ),
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(createParent);
