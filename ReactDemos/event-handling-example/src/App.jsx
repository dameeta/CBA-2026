import SyntheticEvent from "./components/SyntheticEvent";


function App() {


  //const handleClick =(name)=>{ alert(`Hello ${name}`);}
  return (
    <>
       {/* <button onClick={() => handleClick("Hari Krishna")}>Greet Me </button>
       <SyntheticEvent/>
       <br/> */}
       {/* <input onKeyDown={(e) => console.log("Key:",e.key)} />
       <br/> */}
       <div onMouseEnter = {()=>console.log("Mouse Entered")}
        onMouseLeave = {() =>console.log('Mouse Leave')}>
        Hover here
       </div>      
    </>
  )
}

export default App
