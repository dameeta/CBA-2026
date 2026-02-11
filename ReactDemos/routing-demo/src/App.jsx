import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import {Routes,Route,Link} from "react-router-dom"
import About from "./pages/About";
function App() {

  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>|{""}
          <Link to="/about">About</Link>|{""}
          <Link to="/*">NotFound</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App
