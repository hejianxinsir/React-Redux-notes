
// 在 Canvas 项目里监听用户调整页面

class Canvas extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    this.updateDimensions = this.updateDimensions.bind(this)    // 重点第一句
  }
  
  componentDidmount(){    // 重点第二句
    window.addEventListener("resize", updateDimensions)
  }
  
  updateDimensions(){   // 重点第三句
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  
  render(){
    return(
      // ...
    )
  }
  
}
