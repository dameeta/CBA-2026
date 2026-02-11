import { useState } from "react";

function ControlledCompo(){

  const [userName,setUserName] = useState("");
  return (
    <div>
    <input type="text" value={userName} onChange={(e)=>
      setUserName(e.target.value)} placeholder="Enter userName"/>
      <p>Entered user name is {userName}</p>
      </div>
    );
    
}
export default ControlledCompo;

