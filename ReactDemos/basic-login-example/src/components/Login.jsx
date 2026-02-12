import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Login(){
const [email,setEmail]= useState("");
const [password,setPassword]=useState("");
const navigate= useNavigate();

const handleLogin = (e) =>{
  e.preventDefault();

if (email === "admin@gmail.com" && password === "###111"){
  localStorage.setItem("token","fakeToken");
  console.log('Welcome');
  navigate("/dashboard");
}
else{
  alert("Invalid Credentials!!")
}
};
return (
  <div
    style={{textAlign:"center",marginTop:"100px"}}>
      <h2>Login Page</h2>

      <form onSubmit={handleLogin}>
        <div>
          <input type="email" placeholder="Enter Email" value = {email}
          onChange={(e) =>setEmail(e.target.value)}/>

        </div>
        <br/>
        <div> 
          <input type="password" placeholder="Enter Password" value={password}
          onChange={(e)=>setPassword(e.target.value)}/>

        </div>
        <br/>
        <button type="submit">Login</button>
      </form>
  </div>
);
}
export default Login;