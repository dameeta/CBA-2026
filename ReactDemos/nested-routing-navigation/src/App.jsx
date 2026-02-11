import NotFound from "./pages/NotFound"
import Dashboard from "./pages/Dashboard"
import {Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home"
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

function App() {

  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/dashboard">Dashboard</Link> 
        </nav>
        <hr/>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* //nested routes here */}
          <Route path="/dashboard" element={<Dashboard/>}>
                  <Route index element={<p>Select an option</p>}/>
                      <Route path="profile" element={<Profile/>} />
                      <Route path="settings" element={<Settings/>} />
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        
      </div>
    </>
  )
}

export default App
