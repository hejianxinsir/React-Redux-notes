
// Refs: Refs provide a way to access DOM nodes or React elements created in the render method.

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: false
    }
    this.myRef = React.createRef();
  }
  
  render(){
    return(
      <div ref={this.myRef}></div>
    )
  }
}
