HTML

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>JS Bin</title>
<script src="https://cdn.bootcss.com/react/16.10.1/umd/react.production.min.js"></script>
<script src="https://cdn.bootcss.com/react-dom/16.10.1/umd/react-dom.production.min.js"></script>
<script src="https://cdn.bootcss.com/redux/4.0.4/redux.min.js"></script>
</head>
<body>
<div id="app">

</div>
</body>
</html>
```

JS

```
var store = Redux.createStore(stateChanger)

	function add1(){
		store.dispatch({type: 'add', payload: 1})
	}

function add2(){
	if(store.getState() % 2 === 1){
		store.dispatch({type: 'add', payload: 1})
	}
}

function add3(){
	setTimeout(()=>{
			store.dispatch({type: 'add', payload: 1})
	},1000)
}

function render(){
	var app = document.querySelector('#app')
		app.innerHTML = `
		<div>
			<span>${store.getState()}</span>
		<div>
			<button onclick="add1()">+1</button>
			<button onclick="add2()">若单数则+1</button>
			<button onclick="add3()">一秒后+1</button>
			</div>
		</div>
}

render(store)
store.subscribe(()=>{
			render(store)
})

function stateChanger(state, action){
	if(state === undefined){
		return 0
	}else{
		if(action.type === 'add'){
			var newState = state + action.payload
				return newState
		}else{
			return state
		}
	}
	return newState
}
```
