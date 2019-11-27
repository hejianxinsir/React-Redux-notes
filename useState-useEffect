// useState useEffect 简单应用 codeSanbox 里写

// 一个注意点：把先前的所有属性都拷贝过来，用 … (点点点语法)，比如  …user

// useState

import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const add = ()=>{
    setCount(count+1)
  }
  const minus = ()=>{
    setCount(count-1)
  }

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={add}>+1</button>
        <button onClick={minus}> -1 </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```

// useEffect

// 什么是副作用？如果面试官问你，你就这样举例回答。
// 比如:

function fn(){}	// 这个函数没有作用 	

function fn(){ console.log(1) }	 // 这个函数有 console.log ，console.log 是外部提供的东西，我们说这个函数是有副作用的。一般情况下，这会打印出 1 。但 console.log 毕竟是外部提供的，有一天可能会被该掉。所以就有可能产生意外的结果。

function fn2(a,b){ return a+b }	 // 这个没有用外部的东西，就没有副作用。我们叫纯函数，没有副作用。


// useEffect 是干嘛的？如果你的函数是有副作用的函数，那就把函数写进 useEffect 里面

import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    document.querySelector('#output').innerText = count;
  });

  const [user, setUser] = useState({name: 'janson', age: '18', 
    hobbies: ['lol','baaketball','code']});
  const add = ()=>{
    setCount(count+1)
  }
  const minus = ()=>{
    setCount(count-1)
  }

  const old = ()=>{
    setUser({
      ...user,
      age:  parseInt(user.age, 10) + 1
    })
  }

  const addHobbies = ()=>{
    let newHobby = Math.random();
    setUser({
      ...user,
      hobbies: [...user.hobbies, newHobby]
    })
  }

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={add}>+1</button>
        <button onClick={minus}> -1 </button>
      </div>
      <div>
        <div>{user.name}, {user.age}, <br/> {user.hobbies.join(', ')}</div>
        <button onClick={old}>+1</button>
        <button onClick={addHobbies}> 增加爱好 </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
