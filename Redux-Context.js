
/* 
例1: 函数传值, 用 vanilla JS 写的。
如果把 n 从局部作用域里提出来，变成全局作用域，
就可以不一层层传值了，但是有问题！这样 n 的范围太广了。
别人可以在其他地方随时修改 n ，这是很危险的。
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

