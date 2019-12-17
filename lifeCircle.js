
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = { date: new Date()}
  }

  componentDidMount(){
    this.timerID = setInterval(()=>{
      this.tick()
    },1000)
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount(){
    clearInterval()
  }

  render(){
    return(
      <div>
        <div>Hello, the current time is: </div>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Clock />, rootElement);
