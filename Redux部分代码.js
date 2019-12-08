
// Redux 主要功能是防呆/防止猪队友，原则上你不能改数据，但 JS 做不到这一点，你实际上可以手动改数据，这是 JS 的 bug；
// 在下面的 render 函数里面，store={store.getState()}, getState 这个 API 已经暗示你了只能 get ，只能get，只能 get； 
// 事件名和参数有明确规定：action type / action payload ; 重要数据只能用 props 传递，不能用 state；而 store 放到 this.state里


// 如果是在 jsbin 里，要先引入 reducer

let createStore = Redux.createStore

let reducers = (state,action) => {
  state = state || {
    money: {amount: 10000}
  }
  switch(action.type){
    case '我想花钱':
      console.log('here')
      return(
        money: {
          amount: state.money.amount - action.payload
        }
      )
    default: 
      return state
  }
}

const store = createStore(reducer)

class Son2 extends React.Component {
  constructor(){
    super()
  }

  x(){
    store.dispatch({ type: '我想花钱'， payload: 100})
  }

  render(){
    return(
      <div className="son"> son2 {this.props.money.amount}
        <button onClick={()=>this.x()}>消费</button>
      </div>
    )
  }
}

function render(){
  ReactDOM.render(
    <App store={store.getState()}/>,  
    //用 props 传 store，于是 顶层 App 组件就不需要用 this.state 存 store 了。因为已经用了 props 传 store
    document.getElementById('root')
  )
}

store.subscribe(render)   // 监听 ‘我想花钱’ 这个信号，如果有这个信号就再render
