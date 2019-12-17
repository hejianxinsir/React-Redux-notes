
// 事件的写法

// onClick 后面接的是大括号；HTML 的写法是接一个字符串。
<button onClick={activateLasers}>   
  Activate Lasers
</button>

// 写法的另一个不同是，HTML 里，可以直接写 return false 来避免默认动作；而 React 里不能这样写。
// HTML 是这样写的: 

<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>

// React 是这样写: 
function ActionLink(){
  function handleClick(e){
    e.preventDefault();
    console.log('The link was clicked')
  }

  return(
    <a href="#" onClick={}>
      click me
    </a>
  )
}

// React 里如何绑定 this ？以下有四种方法，但是！但是，官方推荐在 constructor 里绑定 this 或者用 class fields syntax 语法

// 方法一:
<button onClick={this.handleClick.bind(this)}

// 方法二: 或者写到 constructor 里面; 跟方法一其实是一样的，位置不同而已
constructor(props){
  super(props);
  this.state = {}
  this.handleClick = this.handleClick.bind(this)
}

// 方法三: 用还在实验当中的新语法(当下时间 2019.12.17)，即: publick class fields syntax
// 这个方法在 create react app 里是内置的

class LoginButton extends React.Component {
  constructor(){
    super();
    this.state = {}
  }
  
  handleClick = ()=>{
    console.log('this is': this);
  }
  
  render(){
    return(
      <button onClick={this.handleClick}>
        click me
      </button>
    )
  }
}

// 方法四: 用箭头函数嘛

class LoginButton extends React.Component {
  handleClick(){
    console.log('this is :' this)
  }
  
  render(){
    return(
      <button onClick={(e)=>this.handleClick(e)}>
        click me
      </button>
    )
  }
}


// 做一个小按钮

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true
    }
  }

  handleClick(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Toggle />, rootElement);
