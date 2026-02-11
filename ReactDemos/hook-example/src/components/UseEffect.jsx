import { useEffect,useState } from "react";
//lifecycle and side effect
//replacement of 3 methods of class components componetDidMount//componentDidUpdate
//componentWillUnmount  
function UseEffect() {
const [x,setX]=useState(0);

useEffect(()=>{
  console.log("will run on mount and will update",x);
  return()=>{
    console.log("will clean up on unmount",x);
setX(x+1);
//reset the value of x to 0 when component unmounts
    console.log("will run on update",x);
  };
},[x]);//dependency array)
}
export default UseEffect;