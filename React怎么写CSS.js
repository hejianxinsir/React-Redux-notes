
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

// 方法三: 原则是，在 github 上找 star 数量最多的前几个
// 下面是用 JS 写 CSS
// - 在 codesnadbox 引入 styled-components (这个办法自动帮你想名字)
// - import styled from 'styled-components'; 然后这样写:



function App(props) {
  const theme = props.theme

  const Div1 = styled.div`
    color: pink;
    font-size: 50px;
    background: ${theme}
  `;

  return (
    <Div1>
      x
    </Div1>
  );
}

// 方法四: emotion 全部代码如下，好像不需要引入 react

/** @jsx jsx */
// import React from "react";
import ReactDOM from "react-dom";
import { jsx, css, Global, ClassNames } from '@emotion/core'

function App() {
  return (
      <div css={{color: 'red'}}>
        x
        <div css={css`color: black`}>
          janson
        </div>
        <Global
          styles={{
            body: {
              margin: 0,
              padding: 0
            }
          }}
        />
        <ClassNames>
          {({ css, cx }) => (
            <div
              className={cx(
                'some-class',
                css`
                  color: yellow;
                `
              )}
            />
          )}
        </ClassNames>
      </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); 



