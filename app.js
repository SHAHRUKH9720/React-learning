import React from "react";
import ReactDOM from "react-dom/client";

const timer = 3000;
const fn  = ()=>{
  console.log("fun called")
}
const Title = ()=> <h3>Title of app</h3>
const headingElemnt = <h4>Heading h4</h4>
const HeadingComponent = ()=>(
  <div id="container">
    <h1>Functional Component</h1>
    <h2>Heading 2</h2>
    {fn()}
    {<h2>jsx expression</h2>}
    {timer}
    {headingElemnt}
    <Title></Title>
    <Title/>
  </div>
)
// can inside {} in jsx can bind a js value , function calling or any js code and can write jsx 
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
