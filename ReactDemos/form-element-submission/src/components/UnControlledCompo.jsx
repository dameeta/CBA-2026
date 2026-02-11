import { useRef } from "react";

function UnControlledComp(){

  const nameRef= useRef();

  const handleSubmit = (e) =>{e.preventDefault();
    alert(nameRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default UnControlledComp;