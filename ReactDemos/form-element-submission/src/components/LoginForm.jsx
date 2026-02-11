import { useState } from "react";

function LoginForm() {
  const [username,setUserName] = useState("");
  const doSubmit = (event)=>{
    event.preventDefault();
    alert("Form submitted successfully Name:"+ username);
  };
  return(
    <form onSubmit={doSubmit}>
      <label>User Name : <input type="text" value={username} onChange={(e)=>
        setUserName(e.target.value)}/></label>
        <button type="submit">Submit</button>
    </form>

  );

}
export default LoginForm;