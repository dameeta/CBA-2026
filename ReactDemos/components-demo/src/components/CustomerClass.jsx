import React,{Component} from "react";
class CustomerClass extends Component{
 constructor()
 {
  super();
  this.state={
    custName : "Samir Joshi",
    custAge :30,
    custAddress : "Chennai, India"
  };
 }
   render(){
    return(
      <div style={{alignContent:"center", border : "2px solid brown", padding: "15px", width: "300px"}}>
        <h4>Customer Info: </h4>
        <p><b>Name:</b> {this.state.custName}</p>
        <p><b>Age:</b> {this.state.custAge}</p>
        <p><b>Address:</b> {this.state.custAddress}</p>

      </div>
    );

}


}
export default CustomerClass;