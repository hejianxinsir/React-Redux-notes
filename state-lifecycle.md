state and lifecycle

reference : https://reactjs.org/docs/state-and-lifecycle.html

ONE : state

State is similar to props, but it is private and fully controlled by the component.

TWO : mounting / unmounting

We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.

We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.

We can declare special methods on the component class to run some code when a component mounts and unmounts:

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

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
```

These methods are called “lifecycle methods”.

THREE : setState()

Do Not Modify State Directly

// wrong
this.state.comment = 'Hello';

// Correct
this.setState({comment: 'Hello'});

The only place where you can assign this.state is the constructor.

FOUR : State Updates May Be Asynchronous

React may batch multiple setState() calls into a single update for performance.

setState() 是异步更新的，所以你设置多次，setState 会把它合并成一次。比如：
```
// That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

// Wrong
this.setState({
	counter: this.state.counter + this.props.increment
 })

// Correct
this.setState(( state, props )=> {
	counter: state.counter + props.increment
 })

// Correct
this.setState(function(state, props){
	return {
		counter: state.counter + props.increment
	 }
 })
```

FIVE : State Updates are Merged

```
// 你的 constructor 可能有两个变量 posts、comments
constructor(props){
	super(props);
	this.state = {
		posts: [],
		comments: []
	 }
 }

// 分别设置 setState 可以单独更新
componentDidMount(){
	fechPosts().then(response =>{
		this.setState({
			post: response.posts
		 });
	 });
	fetchComments().then(response =>{
		this.setState({
			comments: response.comments
		 })
	 })
 }
 ```
