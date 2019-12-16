
// 代码可能重复

import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

import "./styles.css";

function Box1() {
  return <div className="box1">注册</div>;
}

function Box2() {
  return <div className="box2">登录</div>;
}

function Welcome() {
  return <div className="welcome">欢迎</div>;
}

function App() {
  let path = window.location.pathname;

  let initUi = "";
  if (path === "/login") {
    initUi = "登录";
  } else if (path === "/signup") {
    initUi = "注册";
  } else {
    initUi = "欢迎";
  }

  const [Ui, setUi] = useState(initUi);
  const onClickLogin = () => {
    setUi("登录");
    window.history.pushState(null, "", "/login");
  };
  const onClickSignup = () => {
    setUi("注册");
    window.history.pushState(null, "", "/signup");
  };
  const onWelcome = () => {
    setUi("欢迎");
    window.history.pushState(null, "", "/welcome");
  };

  const changeUi = () => {
    if (Ui === "欢迎") {
      return <Welcome />;
    } else if (Ui === "注册") {
      return <Box1 />;
    } else if (Ui === "登录") {
      return <Box2 />;
    } else {
    }
  };

  return (
    <div className="App">
      <button onClick={onClickSignup}>注册</button>
      <button onClick={onClickLogin}>登录</button>
      <button onClick={onWelcome}>欢迎</button>
      <div className="boxWrap">{changeUi()}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
