
// window.history.pushState(null,'','/login')；只有当后端把所有东西都指向首页才能用，否则你就用 hash 做路由，在前端，
// hash 就是路由

import React from "react";
import ReactDOM from "react-dom";
import {useState} from 'react';

import "./styles.css";

function Box1(){
  return(
    <div className="box1">注册</div>
  )
}

function Box2(){
  return(
    <div className="box2">登录</div>
  )
}

function App() {
  let hash = window.location.hash
  let initUi = hash === '#signup' ? '注册' : '登录'
  const [Ui, setUi] = useState(initUi);
  console.log(initUi)
  const onClickLogin = ()=>{
    setUi('登录')
    window.history.pushState(null, '', '/login')
  }
  const onClickSignup = ()=>{
    setUi('注册')
    window.history.pushState(null, '', '/signup')
  }

  return (
    <div className="App">
      <button onClick={onClickSignup}>注册</button>
      <button onClick={onClickLogin}>登录</button>
      <div className="boxWrap">
        {Ui === '登录' ? <Box2 /> : <Box1/>}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
