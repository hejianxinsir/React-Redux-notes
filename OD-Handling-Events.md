
## 官方文档笔记

1. 阻止默认行为：
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

