// Context 笔记

// reference : https://reactjs.org/docs/context.html

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const themeContext = React.createContext();

function Button(){
  return <button>button</button>
}

function Box(props){
  return <div className={`box ${props.theme}`}>{props.children}</div>
}

function Input(){
  return <input />
}

class App extends React.Component{
  change = ()=>{
    if(this.state.theme === 'green'){
      this.setState({theme: 'red'})
    }else{
      this.setState({theme: 'green'})
    }
  }
  constructor(){
    super()
    this.state = {
      theme: 'green'
    }
  }
  render(){
    return(
      <themeContext.Provider value={this.state.theme}>
        <div className="App">
          <button onClick={this.change}>changeSkin</button>
          <themeContext.Consumer>
          {
            theme=>(
              <div>
                <Box theme={theme}><Input /></Box>
                <Box theme={theme}><Button /></Box>
              </div>
            )
          }
          </themeContext.Consumer>
        </div>
      </themeContext.Provider>
      
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
