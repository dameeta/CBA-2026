import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import {GoogleOAuthProvider} from "@react-oauth/google";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='708944352855-cohnsihl8p3hediacjk2dsu7osqnmfeu.apps.googleusercontent.com'>
   <App />
</GoogleOAuthProvider>

)
