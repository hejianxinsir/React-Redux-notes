
// 把一个作用域里的 n 的值，传给 f1 f2 f3 f4 

function f1(n1){
	console.log(1,n1)
	f2(n1)
}

function f2(n2){
	console.log(2,n2)
	f3(n2)
}

function f3(n3){
	console.log(3,n3)
	f4(n3)
}

function f4(n4){
	console.log(3,n4)
}

{
	let n = 100
	f1(n)
	console.log('done')
}

