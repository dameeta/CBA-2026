function ListJsx() {
  const days= ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']; 
  return (
    <ul>
      {days.map((d,index) =>(
        <li key = {index}>{d}</li>
      ))}
   </ul>
  );
}
export default ListJsx;
