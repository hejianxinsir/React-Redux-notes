
// 面试题: 在哪里发请求？推荐在 onClick、componentDidMount(){} 等事件处理函数里发请求。但是面试的时候，
// 要回答在 componentDidMount(){}; 因为 constructor(){} 里不能使用 setState()，所以排除 constructor 里发请求。
// componentWillMount 也可以发请求，由于 fiber 的原因，排除。这个去 google 看详情。

// 面试题: setState 合并状态后几个生命周期函数的调用顺序是？
shouldComponentUpdate(){} -- componentWillUpdate(){} -- render(){} -- componentDidUpdate(){}

// 说出所有生命周期的 hooks

// this.state = {} 最好在 constructor 里初始化

// this.setState({})  componentDidMount(){} 之后都可以

// 面试题: React 性能优化是哪个生命周期函数？也是 shouldComponentUpdate(){}
// 阻止更新，可以用 shouldComponentUpdate(){}; 面试题: 这个为什么重要？以及有什么用？
// 答: 1. 允许我们手动判断是否更新组件 2. 避免不必要的更新、优化更新效率。

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

