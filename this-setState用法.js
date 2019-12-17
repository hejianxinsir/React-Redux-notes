
// React may batch multiple setState() calls into a single update for performance.
// Because this.props and this.state may be updated asynchronously, 
// you should not rely on their values for calculating the next state.

// React 可能把好几个 setState() 合并成一次更新。因为 this.props 和 this.state 可能是异步更新，所以你不能一来他们的值
// 来计算下一次 state

// 比如这是错误的写法:

this.setState({
  counter: this.state.counter + this.props.increment,
});

// 这才是正确的写法:
// To fix it, use a second form of setState() that accepts a function rather than an object. 
// That function will receive the previous state as the first argument, 
// and the props at the time the update is applied as the second argument:

this.setState((state, props) => ({
  counter: state.counter + props.increment
}));    // state 是先前的 state，作为第一个参数，第二个参数是要更新的 props

