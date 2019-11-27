// 组件之间的通信：龟兔赛跑

// 01：https://jsbin.com/wiqahasuge/edit?html,js,output

// 父子之间如何同信？父亲传一个函数给子元素，子元素在恰当的时候调用

// 那，爷爷组件和孙子组件如何同信？爷爷（比如App）把函数传给爸爸，爸爸（比如Playground）再透传给孙子（就是 Playground 函数 render 的东西，孙子在这里调用）

// 如果曾爷爷怎么传给曾孙子？同理，一路传下来呗。

// React

//  这个 App 是父亲，下面两个 Track 是儿子，这就是父子通信。
class App extends React.Component{
  constructor(){
    super()
    this.state = {	// 这里初始化 result1 2 
      result1: 0,
      result2: 0
    }
    this.t0 = new Date()
  }
  success1(x){
    console.log(x)	// 传的参数在这里调用
    console.log('兔子跑完了，用时')
    let r1 = new Date() - this.t0
    this.setState({
      result1: r1		// 这里修改 result1 2
    })
  }
  success2(x){
    console.log(x)	// 同样，传的参数在这里调用
    console.log('乌龟跑完了，用时')
    let r2 = new Date() - this.t0
    this.setState({
      result2: r2
    })
  }
  render(){
    return (
      <div>
        <div class="wrap">
          <Time1 result={this.state.result1}/>	// 这里把修改后的 result 传进去更新
          <Judge />
          <Time2 result={this.state.result2}/>
        </div>
        <Track1 success={this.success1.bind(this)}/>	//**这两个Track是儿子**
        <Track2 success={this.success2.bind(this)}/>
      </div>
    )
  }
}

function Time1(props){
  return (
    <div>
      <div>🐇用时</div>
      <div>{props.result}</div>
    </div>
  )
}

function Time2(props){
  return (
    <div>
      <div>🐢用时</div>
      <div>{props.result}</div>
    </div>
  )
}

function Judge(){
  return (
    <div className="judge">
      JUDGE
    </div>
  )
}

class Track1 extends React.Component{
  constructor(props){
    super(props);
    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }
    let timerID = setInterval( ()=>{
      n += 20
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if(n >= 100){
        window.clearInterval(timerID)
        this.props.success(‘我是小白兔’)	// 传一个参数
      }
    },1000)
    
  }

  render(){
    return (
    <div>
      <div  style={this.state.style}>🐇</div>
      <div className="pathway"></div>
    </div>
    )
  }
}

class Track2 extends React.Component{
  constructor(props){
    super(props);
    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }
    let timerID = setInterval( ()=>{
      n += 10
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if(n >= 100){
        window.clearInterval(timerID)
        this.props.success(‘我是大海龟’)
      }
    },1000)
    
  }

  render(){
    return (
    <div>
      <div style={this.state.style}>🐢</div>
      <div className="pathway"></div>
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)


// HTML

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <script src="https://cdn.bootcss.com/react/16.10.1/umd/react.production.min.js"></script>
  <script src="https://cdn.bootcss.com/react-dom/16.10.1/umd/react-dom.production.min.js"></script>
</head>
<body>
  <div id="root">
    
  </div>
</body>
</html>


// CSS

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  padding: 30px;
}
.judge{
  color: red;
  margin: 0 18px;
}

.wrap{
  display: flex;
  justify-content: center;
}

.pathway{
  border-bottom: 1px solid;
}

