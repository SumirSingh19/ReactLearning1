const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "First h1"),
        React.createElement("h2", {
            id: "parent"
        }, "Under h1")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "First h1"),
        React.createElement("h2", {
            id: "parent"
        }, "Under h1")
    ])
]);
//The created element by the React gives an object in which all of this HTML code is defined which is then rendered and browser understands
// in the form of an HTML 
//ReactElement(Object) => HTML(Browser Understands) 
//const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
