// -----------------Hello World Using Java Script----------

// let createHeading = document.createElement('h1');
// createHeading.innerHTML='Hello world using Java Script';
// document.getElementById('root').appendChild(createHeading)

// -----------------Hello World Using React----------

// let createHeading = React.createElement("h1", {}, "Hello World Using React");
// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(createHeading)

/* -----------------Create Multiple element  
    <div id="root">
        <div id="parent">
            <h1 id="heading1">H1 heading </h1>
            <div>
                <h2 id="heading2">H2 heading </h2>
            </div>
        </div>
    </div>
*/

let createParent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "heading1" }, "H1 heading"),
  React.createElement(
    "div",
    {},
    React.createElement("h2", { id: "heading2" }, "H2 heading")
  ),
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(createParent);
