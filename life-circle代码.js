
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let div = document.createElement("div");
document.body.appendChild(div);
console.log = function(content) {
  div.innerHTML += `${content}<br/>`;
};

class Baba extends React.Component {
  constructor() {
    super();
    this.state = {
      hasChildren: true
    };
  }

  kill(){
    this.setState({
      hasChildren: false
    })
  }

  callSon(){
    this.setState({
      word: '你还好吗'
    })
  }

  render() {
    return (
      <div>
        我是你爸爸
        <button onClick={this.kill.bind(this)}>kill son</button>
        <button onClick={this.callSon.bind(this)}>call Son</button>
        { this.state.hasChildren ? <App world={this.state.world}/> : null}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("创建 app");
    this.state = {
      n: 0
    };
  }

  show() {
    console.log("用户点击了");
    this.setState({
      n: this.state.n + 1
    });
  }

  componentDidMount() {
    console.log("已经 Mount 了");
  }

  componentWillReceiveProps() {
    console.log('我爸说话了')
  }

  render() {
    console.log("填充内容");
    return (
      <div className="App">
        <button onClick={this.show.bind(this)}>click</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Baba />, rootElement);
