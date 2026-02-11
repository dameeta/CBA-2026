import React, { Component } from 'react';

class VisitorCounter extends Component{
  constructor(props){
    super(props);
    console.log("1. Constructor called");
    this.state = {visitorCount : 0}
}
// eslint-disable-next-line no-unused-vars
static getDerivedStateFromProps(props,state){
  console.log("2. getDerivedStateFromProps called");
  return null;//dont have state update
}
componentDidMount(){
  console.log("4. componentDidMount called");
  //render
}
// eslint-disable-next-line no-unused-vars
shouldComponentUpdate(nextProps,nextState){
  console.log("5. shouldComponentUpdate called");
  return true; //allow to update which allows to rerender

}
getSnapshotBeforeUpdate(prevProps,prevState){
  console.log("7. getSnapshotBeforeUpdate called");
  return prevState.visitorCount;//the value with snapshot
}
componentDidUpdate(prevProps,prevState,snapshot){
console.log("8. componentDidUpdate called");
  console.log("Previous Visitor Count was : ",snapshot);
}
componentWillUnmount(){
  console.log("9. ComponentWillUnmount called");
}
incrementVisitor = () =>{
  this.setState({visitorCount : this.state.visitorCount + 1});  
}
render(){
  console.log("3. Render method is called");

  return(
    <div><h2>VisitorCounter : {this.state.visitorCount}</h2>
    <button onClick={this.incrementVisitor}>Increment</button>
    
    </div>
  );
}
}

export default VisitorCounter;