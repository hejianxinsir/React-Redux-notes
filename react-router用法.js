
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";

function Welcome(){
  return <div>hello</div>
}

function Box2(){
  return <div>2box2</div>
}

function Box3(){
  return <div>3box3</div>
}

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Welcome</Link> | 
        <Link to="/box2">2Box2</Link> | 
        <Link to="/box3">3Box3</Link>

        <Switch>
          <Route path="/box3">
            <Box3 />
          </Route>
          <Route path="/box2">
            <Box2 />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
