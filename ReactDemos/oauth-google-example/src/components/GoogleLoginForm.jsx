import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

export default function GoogleLoginForm() {

  const handleSuccess = (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse.credential);
    console.log("user info :", decoded);

    alert("Login Successfully");
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Social Login Authentication Example</h2>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
}
