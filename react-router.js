
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";

function App() {
  return <div className="content">App</div>;
}

function Box1() {
  return <div className="content">Box1</div>;
}

function Box2() {
  return <div className="content">Box2</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <div>
      <Link to="/app">
        <button className="link">App</button>
      </Link>
      <Link to="/box1">
        <button className="link">Box1</button>
      </Link>
      <Link to="/box2">
        <button className="link">Box2</button>
      </Link>

      <Switch>
        <Route path="/app">
          <App />
        </Route>
        <Route path="/box1">
          <Box1 />
        </Route>
        <Route path="/box2">
          <Box2 />
        </Route>
      </Switch>
    </div>
  </Router>,
  rootElement
);
