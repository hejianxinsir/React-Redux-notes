// 代码练习-props-changeMessage


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      message: '乌龟'
    }
  }
  
  changeMessage(){
    this.setState({
      message: '兔子'
    })
  }
  
  render(){
    return(
      <div>
        hi
        <Good message={this.state.message}
              fn={this.changeMessage.bind(this)}
        />
      </div>
    )
  }
}

function Good(props){
  return(
    <div>
      {props.message}
      <button onClick={props.fn}>click</button>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
