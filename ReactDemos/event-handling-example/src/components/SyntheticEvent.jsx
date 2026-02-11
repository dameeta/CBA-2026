function SyntheticEvent (){
  const handleChange = (event) =>{
    console.log(event.target.value);
  };
  return <input onChange={handleChange} />

}
export default SyntheticEvent;
//event.target.value
//event.preventDefault()
//event.stopPropagation()