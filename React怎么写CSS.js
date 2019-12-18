
// 方法一: 单独写 xxx.css , 然后 import 'xxx.css'; 这个很常见，但弊端是，如果组件多了，就难以命名。解决办法就是加前缀，
// 但还是很麻烦。当然，你可以把 a 相关的放在一个 js css 等文件，模块化一下。

// 特殊的 className 写法。注意下面的 ${theme} , 这个类名取决于前面的 theme 值，是个动态的类。这个 className 是从变量里得来的
function Topbar(props){
  const theme = props.theme
  return(
    <div className={`topbar topbar-${theme} `}
      哈哈
    </div>
  )
}

// 方法二: classnames 库。
// 1. 在 codesandbox 里引入 classnames 库; 
// 2. 然后，import classNames from "classnames"
// 注意看下面的写法，注意细节
function App() {
  return (
    <div className={c("App")}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

function App() {
  return (
    <div className={c("topbar", `topbar-${theme}`)}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}


