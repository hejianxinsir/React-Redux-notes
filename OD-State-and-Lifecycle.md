### 官方文档笔记
- https://reactjs.org/docs/state-and-lifecycle.html

### 看代码
```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {  // 第一次 mount 之后给 timer
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {  // 在这个方法里消灭 timer
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

### state 更新可能是异步的 State Updates May Be Asynchronous

```
// 错误写法
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
因为 state 更新可能是异步的，所以靠 state 是不靠谱的。那怎么办？

To fix it, use a second form of setState() that accepts a function rather than an object.
That function will receive the previous state as the first argument, and the props at the
time the update is applied as the second argument:

```
// 正确写法，箭头函数

```
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

// 正确写法，function 函数
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

用箭头函数，function 函数也可以。setState 接受一个函数，第一个参数是 state，第二个参数是更新后的 props。

### The Data Flows Down 
- A component may choose to pass its state down as props to its child components

一个组件里的 this.state = {} 是很隐私的，除了拥有这个 state 的 class ，没有人了解 state 的信息。state 的信息会单向向下流动，
任何从 state 里得到信息的 data/UI 只能向下产生影响，因为是单向向下流动的嘛。






