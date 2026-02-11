import ControlledCompo from "./components/ControlledCompo"
import LoginForm from "./components/LoginForm"
import UnControlledComp from "./components/UnControlledCompo"


function App() {

  return (
    <>
      <div>
        <h2>Simple Form Example</h2>
        {/* <LoginForm/> */}
        <ControlledCompo/>
        <UnControlledComp/>

      </div>
    </>
  )
}

export default App
