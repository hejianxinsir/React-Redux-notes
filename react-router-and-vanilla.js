import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";

function App() {
  function Box1() {
    return <div className="content">登录</div>;
  }
  function Box2() {
    return <div className="content">注册</div>;
  }
  function Welcome() {
    return <div className="content">欢迎</div>;
  }

  // let path = window.location.pathname;
  // let pathFn = () => {
  //   if (path === "/login") {
  //     return <Box1 />;
  //   } else if (path === "signup") {
  //     return <Box2 />;
  //   } else if (path === "/welcome") {
  //     return <Welcome />;
  //   }
  // };
  // let initUi = pathFn();
  // let [ui, setUi] = useState(initUi);

  // let onClickLogin = () => {
  //   setUi("登录");
  //   window.history.pushState(null, "", "/login");
  // };
  // let onClickSignup = () => {
  //   setUi("注册");
  //   window.history.pushState(null, "", "/signup");
  // };
  // let onClickWelcome = () => {
  //   setUi("欢迎");
  //   window.history.pushState(null, "", "/welcome");
  // };

  // let showUi = ()=>{
  //   if(path === '/login'){
  //     return <Box1 />
  //   }else if(path === '/signup'){
  //     return <Box2 />
  //   }else if(path === '/welcome'){
  //     return <Welcome />
  //   }
  // }
  return (
    <Router className="App">
      <div>
        |<Link to="/login">登录</Link> |
        <Link to="/signup">注册</Link> |
        <Link to="/welcome">欢迎</Link>

        <Switch>
          <Route path="/login">
            <Box1 />
          </Route>
          <Route path="/signup">
            <Box2 />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <button className="btn" onClick={onClickLogin}>login</button>
    //   <button className="btn" onClick={onClickSignup}>signup</button>
    //   <button className="btn" onClick={onClickWelcome}>welcome</button>
    //   <div>{showUi()}</div>
    // </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
