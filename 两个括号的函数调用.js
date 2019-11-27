// 两个括号的函数调用方式

function connect(a){
	console.log(1)
	return function fn(b){
		console.log(b)
	}
}

connect(1)(2)

function connect(a){
	return function fn(b){
		console.log(a+b)
	}
}

connect(1)(2)

// 前面的部分 connect(1) 叫偏函数
