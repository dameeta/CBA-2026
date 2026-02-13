import { useState } from "react"
import Login from "./components/Login";
import VerifyOtp from "./components/VerifyOtp";


function App() {
const [tempToken,setTempToken] = useState(null);
  return (
    <>
      <div>
        {tempToken ? (<Login onMfaRequired={setTempToken}/>):
        (<VerifyOtp tempToken={setTempToken}/>)}
      </div>
    </>
  );
}

export default App
