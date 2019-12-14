import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { useState } from 'react';

import "./styles.css";

function App() {
  const [count ,setCount] = useState(0);  // Hooks 只能写在 App 里面
  const add = ()=>{
    setCount(count + 1)
  }
  const minus = ()=>{
    setCount(count - 1)
  }
  const [user, setUser] = useState({
    name: 'hehe', 
    age: '18',
    hobbies: ['game', 'ball', 'key']
  });

  const setName = ()=>{
    setUser({
      ...user,
      name: 'xixi'
    })
  }
  const addHobby = ()=>{
    user.hobbies.splice(1,1);
    setUser({
      ...user,
      hobbies: [...user.hobbies]
    })
  }
  return (
    <div>
      <div>{count}</div>
      <div><button onClick={add}>+1</button></div>
      <div><button onClick={minus}>-1</button></div>

      <div>{user.name}, {user.age}, {user.hobbies.join(', ')}</div>
      <div><button onClick={setName}>setUser</button></div>
      <div><button onClick={addHobby}>addHobby</button></div>


    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
