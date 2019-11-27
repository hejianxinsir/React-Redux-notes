
// 生命周期四个过程 : 生 挂 更 死

let app = document.getElementById('app');

// create div  生：创建元素
let div = document.createElement('div');
div.style.border = '1px solid red';

let state = 0;
div.innerHTML = `
  <p>${state}</p>
  <button>+1</button>
  <button>die</button>
`

// mount div 挂：挂载元素
app.appendChild(div);

div.querySelector('button').onclick = ()=>{
  state += 1
  
  // update div  更 : 更新
  div.querySelector('p').innerText = state;
};

div.querySelectorAll('button')[1].onclick = ()=>{
  div.querySelector('button').onclick = nunll;
  div.querySelector('button')[1].onclick = null;
  div.remove();
  div = null;   // destroy div  死
};
