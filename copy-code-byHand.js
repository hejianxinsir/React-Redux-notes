// Redux

// Redux 需要一个 store , store 要接收一个函数。这个函数要接收两个参数，一个是 state 表示之前的状态，第二个是你要的操作 action 。

var store = Redux.createStore(函数)

function fn(store , 操作){
	// …
	return 新的状态
}


// 初次抄代码

function render(store){
	var app = document.querySelector(‘#app’)
	app.innerHTML = `
		<div>
			你点击了<span id=‘value’>${store.getStore}</span> 次
			<div>
				<button id=‘add1’>+1</button>
				<button id=‘minus1’>-1</button>
				<button id=‘add1IfOdd’>是单数就+1</button>
				<button id=‘add1After2Sec’>两秒后+1</button>
			</div>
		</div>
	`
}

function stateChangeer(state, action){
	if(state === undefined){
		return 0
	}else{
		if(action.type === ‘add’){
			var newState = state + 1
			return newState
		}else{
			return state
		}
	}
}

var store = Redux.createStore(stateChange)

render(store)


// 再次抄代码

function add1(){
	store.dispatch({type: ‘add'})
}

function add1IfOdd(){
	var oldState = store.getState()
	if(oldState % 2 === 1){
		store.dispatch({type:’add’, payload: 1})
	}
}

function render(){
	var app = docuemnt.querySelector(‘#app’)
	app.innerHTML = `
		<div>
			你点击了<span id=‘value’>${store.getState}</span> 次
			<div>
				<button id=‘add1’ onclick=‘add1()’>+1</button>
				<button id=‘minus1’>-1</button>
				<button id=‘addIfOdd’ onclick=‘add1IfOdd’>单数就+1</button>
				<button id=‘add1After2Sec’>两秒后+1</button>
			</div>
		</div>
	`
}

function stateChanger(state, action){
	if(state === undefined){
		return 0
	}else{
		if(action.type === ‘add’){
			var  newState = state + 1
			return newState
		}else{
			return state
		}
	}
}

var store = Redux.createStore(stateChanger)

render(store)

store.subscribe(()=>{
	render(store)
})
