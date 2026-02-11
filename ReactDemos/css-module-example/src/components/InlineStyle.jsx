import { useState } from "react";

function InlineStyle (){
const [active,setActive] = useState(false);

const style = {
  backgroundColor:active?"green":"grey",color:"white"
};

return (
  <button style={style} onClick={()=>setActive(!active)}>

  {active ? "Active" : "Inactive"}

  </button>
);


}
export default InlineStyle;