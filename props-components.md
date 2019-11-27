props-components

https://reactjs.org/docs/components-and-props.html

one : 

React is pretty flexible but it has a single strict rule : All React components must act like pure functions with respect to their props.

```
function Welcome( props ){
	return(
		<div>
			My name is : <span>{ props.name }</span>
			Age : <span>{ props.name }</span>
		</div>
	)
}

function App(){
	return(
		<div>
			<Welcome name=“janson” age=“18"/>
		</div>
	)
}

render()

function render(){
	ReactDOM.render(
		<App />,
		document.querySelector(‘#root')
	)
}
```
