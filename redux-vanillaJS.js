Redux + vanillaJS 手抄代码


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
<script src="https://fb.me/react-with-addons-15.1.0.js"></script>
<script src="https://fb.me/react-dom-15.1.0.js"></script>
  <script src="https://cdn.bootcss.com/redux/4.0.4/redux.min.js"></script>

</head>
<body>
  <div id="app"></div>
</body>
</html>

// -----------------

var store = Redux.createStore(stateChanger)

function add1(){
  store.dispatch({type: 'add', payload: 1})
}

function add2(){
  //若奇数则+1
  if(store.getState() % 2 === 1){
    store.dispatch({type: 'add', payload: 1})
  }
}

function add3(){
  setTimeout(()=>{
    store.dispatch({type: 'add', payload: 1})
  },2000)
}

function render(store){
  var app = document.querySelector('#app')
  app.innerHTML =`
    <div>
      数量 : <span>${store.getState()}</span>
      <div>
        <button id="add1" onclick="add1()">+1</button>
        <button id="add2" onclick="add2()">若奇数+1</button>
        <button id="add3" onclick="add3()">2秒后+1</button>
      </div>
    </div>
  `
}

function stateChanger(state, action){
  if(state === undefined){
    return 0
  }else{
    if(action.type = 'add'){
      var newState = state + 1
      return newState
    }else{
      return state
    }
  }
}

render(store)
store.subscribe(()=>{
  render(store)
})
