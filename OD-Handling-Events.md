
## 官方文档笔记
- https://reactjs.org/docs/handling-events.html

### 阻止默认行为：
Another difference is that you cannot return false to prevent default behavior in React. 
You must call preventDefault explicitly. For example, with plain HTML, to prevent the default 
link behavior of opening a new page, you can write:

在 html 里你可以这样写：
```
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

但是在 React 里，你要这样写：

```
function ActionLink(){
  function handleClick(e){
    e.preventDefault();
    console.log('The link wad clicked.');
  }
  
  return (
    <a href="#" onClick={handleClick}>
    Click me
    </a>
  )
}
```

- When using React you should generally not need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered. 这话指的是什么？暂留。

- You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called. 要绑定 this ，否则会是 undefined 。

- If calling bind annoys you, there are two ways you can get around this. If you are using the experimental public class fields syntax, you can use class fields to correctly bind callbacks: 有还在测试阶段的新语法，可以解决绑定 this 有点麻烦的问题。这个叫 class fields syntax 

```
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

- 解决 this 也可以用箭头函数，比如这样
```
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
```

- 解决 this 还可以... We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem. 

### Passing Arguments to Event Handlers

Inside a loop it is common to want to pass an extra parameter to an event handler. For example, if id is the row ID, either of the following would work:

```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

// 如果是箭头函数，就显式地传入 e
// 用 bind 的时候，就自动地... 
```

