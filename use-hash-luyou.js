用 hash 做路由

// 用不同的字符串，对应不同的界面，就可以做路由

import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

import "./styles.css";

function Box1(){
  return <div className="box">注册</div>
}

function Box2(){
  return <div className="box">登录</div>
}



function App() {
  let hash = window.location.hash
  let initUi = hash === 'signup' ? '注册' : '登录'

  let [ui, setUi] = useState(initUi);

  let onClickLogin = ()=>{
    setUi('登录')
    window.location.hash = 'login'
  }
  
  let onClickSignup = ()=>{
    setUi('注册')
    window.location.hash = 'signup'
  }

  return (
    <div className="App">
      <button onClick={onClickLogin}>Login</button>
      <button onClick={onClickSignup}>Signup</button>
      <div>{ui === '注册' ? <Box1 /> : <Box2 />}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
