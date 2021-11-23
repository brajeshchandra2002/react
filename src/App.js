import * as React from "react";
import "./style.css";

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

export default class App extends React.Component{
  constructor(props){
    super(props);
      this.state ={
        toggle: false,
        value: ''
      }
      this.textInput = React.createRef();
  }
   handleClick = (e) => {
    e.preventDefault()
    console.log(e.target)
    this.setState({toggle: true})
  }
   handleClickButton = () =>{
    alert('enter')
    this.setState({ value: this.textInput.current.value})
  };
  render(){
    return(
    <div>
    <h1>Hello StackBlitz!</h1>
    <p>Start editing to see some magic happen :)</p>
    <h3>Value: {this.state.value}</h3>
    <input type="text" ref={this.textInput} />
    { this.state.toggle &&
    <button onClick={ this.handleClickButton}>click me</button>
    }
    <a href='#' onClick={e => this.handleClick(e)}>click me</a>
  </div>
    );
  }
}