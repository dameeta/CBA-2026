import { useState } from "react";
import axios from "axios";
export default function Login({onMfaRequired})
{
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async(e) =>{
  e.preventDefault();
  try{
    const res = await 
    axios.post("http://localhost:5001/login",{
      email,password,
    });
    if(res.data.mfaRequired){
      onMfaRequired(res.data.tempToken);

    }

  }
  // eslint-disable-next-line no-unused-vars
  catch(err)
  {
    alert("Login failed");
  }
};
return(
  <form onSubmit={handleLogin}><h2>Login</h2>
  <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}
  required />
   <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}
  required />
  <button type="submit">Login</button>
  </form>
);

}