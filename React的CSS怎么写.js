1. BEM 命名法：所有 className 都要有前缀。防止组件的 className 重名。className 是全局的。

2. className 可能是由变量得出的，这时候要这么写：<div className={`topbar top-${theme}`}></div>  这是 ES6 的写法。

3. classnames 库 JedWatson 写的
