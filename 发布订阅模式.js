var money = {
  amount: 10000
}

var fnLists = {}
var eventHub = {
  trigger(eventName, data){   //action  action type  action payload
    let fnList = fnLists[eventName]
    if(!fnList){return}
    for(let i=0; i<fnList.length; i++){
      fnList[i](data)
    }
  },
  on(eventName, fn){  
    if(!fnLists[eventName]){
      fnLists[eventName] = []
    }
    fnLists[eventName].push(fn)
  }
}

var x = {
  init(){
    eventHub.on('我想花钱', function(data){
      money.amount -= data
      render()
    })
  }
}

x.init()

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      money: money
    }
  }
  
  render(){
    return (
      <div className="top">
        <Bigpapa money={this.state.money}/>
        <Littlepapa money={this.state.money} />
      </div>
    )
  }
}

class Bigpapa extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <div className="papa1">
        大爸 {this.props.money.amount}
        <Son1 money={this.props.money}/>
        <Son2 money={this.props.money}/>
      </div>
    )
  }
}

class Littlepapa extends React.Component {
  constructor(props){
    super(props)
    
  }
  
  render(){
    return(
      <div className="papa2">
        小爸 {this.props.money.amount}
        <Son3 money={this.props.money}/>
        <Son4 money={this.props.money}/>
      </div>
    )
  }
}

class Son1 extends React.Component{
  constructor(props){
    super(props)
    
  }
  
  render(){
    return(
      <div className="son">儿子1 {this.props.money.amount}
      </div>
    )
  }
}
class Son2 extends React.Component{
  constructor(props){
    super(props)
    
  }
  
  comsume(){
    eventHub.trigger('我想花钱', 100)
  }
  
  render(){
    return(
      <div className="son">儿子2 {this.props.money.amount}
        <button onClick={()=>this.comsume()}>消费</button>
      </div>
    )
  }
}

class Son3 extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <div className="son">儿子3 {this.props.money.amount}
      </div>
    )
  }
}

class Son4 extends React.Component{
  constructor(props){
    super(props)
    
  }
  render(){
    return(
      <div className="son">儿子4 {this.props.money.amount}
      </div>
    )
  }
}


render()
function render(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <script src="https://cdn.bootcss.com/react/16.10.1/umd/react.production.min.js"></script>
  <script src="https://cdn.bootcss.com/react-dom/16.10.1/umd/react-dom.production.min.js"></script>
  <title>JS Bin</title>
</head>
<body>
  <div id="root">
    
    
  </div>
</body>
</html>

// CSS ---------------

.top{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid brown;
  
  padding: 20px;
}

.papa1, .papa2{
  border: 1px solid black;
  padding: 20px;
}

.son{
  border: 1px solid brown;
  padding: 10px;
  margin: 10px 0;
}
*/
