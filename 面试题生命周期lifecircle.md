
# 面试题

1. 生命周期在哪个阶段异步请求数据？
在 componentDidMount 中执行 ajax 异步请求。首先，constructor 里不能使用 setState(); 其次，componentWillMount 在 fiber 里会多次调用造成不稳定; render 没有人用；所以就落到 componentDidMount 里。

2. 请说出生命周期的所有钩子。
componentWillMount / componentDidMount / shouldComponentUpdate / 
componentWillUpdate / componentDidUpdate / componentWillReceiveProps
componentWillUnmount / render /

3. shouldComponentUpdate 为什么重要？
第一，shouldComponentUpdate 可以自定义是否更新组件；第二，可以优化更新的效率。

4. 用户点击一个按钮，setState() 会调用哪几个钩子？
四个。shouldComponentUpdate 、componentWillUpdate、render()、componentDidUpdate

