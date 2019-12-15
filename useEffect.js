
// 什么是 side Effect ？翻译成副作用其实不太准确，应该说是旁系作用，旁边的作用，没成料想的作用。文绉绉的说法是，
// 表达式或函数的行为依赖于外部世界

function fn(){}   // 这是没有副作用的函数

function fn(){ console.log(1) }    // 这是有副作用的函数，因为它依赖于 console.log。一般来说，每执行一次就打印出 1 。但是，
// 但是如果你自定义 console.log 函数，那结果就不一样了。你依赖 console.log 不知道哪来的。这就是 副作用

function fn(a, b){ return a+b}  // 这就是纯函数，没有副作用的函数。为什么这是副作用？因为你不依赖外部的不知道什么的东西。

// 什么是 useEffect ？ 如果你用的函数是有副作用的函数，就把这个函数写在 useEffect 里面。

import React from "react";
import ReactDOM from "react-dom";
import {useState, useEffect} from 'react';

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  // 在 index.html 里加了一个 div；对 react 来说，这个 div 是不知道哪来的东西，那就是有副作用
  // 的东西，所以要 放到 useEffect() 里面。当然，要先引入 useEffect。
  useEffect(()=>{
    document.querySelector('#output').innerHTML = count;
  })

  const add = ()=>{
    setCount(count +1)
  }
  const minus = ()=>{
    setCount(count -1)
  }
  return (
    <div className="App">
      <div>
        <div>{count}</div>
        <div>
          <button onClick={add}>+1</button>
          <button onClick={minus}>- 1</button>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
