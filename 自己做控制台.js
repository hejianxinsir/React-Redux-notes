
let div = document.createElement('div');
document.body.appendChild(div);
console.log = function(content){
  div.innerHTML += `${content}</br>`
}
