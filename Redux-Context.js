
/* 
例1: 函数传值, 用 vanilla JS 写的。

如果把 n 从局部作用域里提出来，变成全局作用域，
就可以不一层层传值了，但是有问题！这样 n 的范围太广了。
别人可以在其他地方随时修改 n ，这是很危险的。
所以，正常人不会这么写代码！

那怎么办？

造出一个局部的全局变量。解决办法是：在 ES5 里，可以用立即执行函数；在 ES6 里，可以用 {} 括起来。
*/

function f1(n1){
  console.log(1, n1)
  f2(n1)
}

function f2(n2){
  console.log(2, n2)
  f3(n2)
}

function f3(n3){
  console.log(3, n3)
  f4(n3)
}

function f4(n4){
  console.log(4, n4)
  f4(n4)
}

{
  let n = 100
  f1(n)
  console.log('done')
}

/*
接上，局部全局函数写法如下
*/

{
let x = {}    // 看完整个代码后，可以把 x 改成 context 了。x 就是 context ，就是局部的全局变量。
window.setX(key, value){    // 在 window 全局里暴露一个访问器，供这个作用域意外的地方设置这里的 x 
  x[key] = value
}
  
window.f1 = function f1(n1){
  console.log(1, n1)
  f2(n1)
}

function f2(n2){
  console.log(2, n2)
  f3(n2)
}

function f3(n3){
  console.log(3, n3)
  f4(n3)
}

function f4(n4){
  console.log(4, x['n'])
  f4(n4)
}

{
  let n = 100
  f1(n)
  console.log('done')
}
  
}

{
window.setX('n', 100)   // 通过 window 下的 setX 来设置另一个作用域里的 x 的值

setTimeout(()=>{
  window.f1()
},1000)
}
