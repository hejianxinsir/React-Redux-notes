
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
