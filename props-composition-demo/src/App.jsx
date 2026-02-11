import CardChildren from "./components/CardChildren"
import StudentDashboard from "./components/StudentDashboard"
import burger from "./assets/burg.png"

function App() {

  return (
    <>
      <div style={{padding:"15px", margin:"0 auto", maxWidth:"800px"}}>
        <CardChildren>
          <h3>Burger</h3>
          <img src={burger} alt="Burger"
          style={{width:"100%",borderRadius:"10px"}}          />
          <p>This is Burger image </p>
        </CardChildren>
        <CardChildren>
          <h3>Burger</h3>
          <img src={burg} alt="Burger"
          style={{width:"100%",borderRadius:"10px"}}          />
          <p>This is Burger image </p>
        </CardChildren>
        <CardChildren>
          <h3>Burger</h3>
          <img src={burg} alt="Burger"
          style={{width:"100%",borderRadius:"10px"}}          />
          <p>This is Burger image </p>
        </CardChildren>
        {/* <StudentDashboard/> */}
      
      </div>
    </>
  )
}

export default App
