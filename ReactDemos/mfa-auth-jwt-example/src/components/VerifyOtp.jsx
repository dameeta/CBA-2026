/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
export default function VerifyOtp({tempToken})
{
  const [otp,setOtp] = useState("");
  const handleVerify = 
  async (e) =>{

    e.preventDefault();
    try {
      const res = await 
      axios.post("http://localhost:5000/verify-otp",{
        otp,tempToken,
      });
      localStorage.setItem("token",res.data.token);
      alert("Login Successful!!");
    }
    catch(error)
    {
      alert("Invalid otp");
    }
  };
  return(
    <form onSubmit={handleVerify}><h2>Enter OTP</h2>
    <input type="text" placeholder="6-digit OTP" 
    onChange={(e)=>setOtp(e.target.value)} required />
    <button type="submit">Verify</button>
    </form>
  );


}