import { useState } from "react";

function LoginControl(){

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const toLogin=()=>{
    setIsLoggedIn(true);
  };
  const toLogout=()=>{
    setIsLoggedIn(false);
  };
  let button;
  let message;

  if(isLoggedIn){
    button = <button onClick={toLogout}>Logout</button>;
    message = <h2>Welcome User!! </h2>
                }
  else{
    button =<button onClick={toLogin}>Login</button>;
    message = <h2>Please Login </h2>;
    }
    return(
      <div style={{textAlign:"center",marginTop:"50px"}}>

        {message}
        {button}
      </div>
    );

}
export default LoginControl;