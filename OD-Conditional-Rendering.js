
// 这一章文章主要讲三元运算符、return null. 比较简单，不做笔记了。
// 主要代码如下

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Greeting(){
  return <h1>Please Sign up ~</h1>
}

function Welcome(){
  return <h1>Welcome back ~</h1>
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: true
    }
  }

  toggle(){
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  render(){
    return (
      <div>
        <div className="App">
          {this.state.isLoggedIn ? <Welcome/> : <Greeting/>}
          <button className='btn' onClick={this.toggle.bind(this)}>
            Toggle
          </button>
        </div>
        
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// return null
// Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods.
// For instance componentDidUpdate will still be called.

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
