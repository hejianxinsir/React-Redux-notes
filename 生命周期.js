
// 在哪里发请求？

推荐在 constructor 与 onClick 等事件处理函数里发请求。当然，componentWillMount DidMount 也可以发请求。

// this.state = {} 最好在 constructor 里初始化

// this.setState({})  componentDidMount(){} 之后都可以
