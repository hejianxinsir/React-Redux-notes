
// 在哪里发请求？推荐在 constructor 与 onClick 等事件处理函数里发请求。当然，componentWillMount DidMount 也可以发请求。

// this.state = {} 最好在 constructor 里初始化

// this.setState({})  componentDidMount(){} 之后都可以

// 阻止更新，可以用 shouldComponentUpdate(){}; 面试题: 这个为什么重要？以及有什么用？
// 答: 1. 允许我们手动判断是否更新组件 2. 避免不必要的更新

shouldComponentUpdate(nextProps, nextState){
  if(nextState.n % 2 === 0){
    return true   // 如果是偶数，就更新
  }else{
    return false
  }
}

shouldComponentUpdate(nextProps, nextState){
  if(this.state.n === nextState.n){
    return false
  }else{
    return true
  }
}
