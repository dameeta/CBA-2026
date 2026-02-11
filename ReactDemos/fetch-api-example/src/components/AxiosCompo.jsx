// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import axios from "axios";
function AxiosCompo (){
const [users,setUsers]= useState([]);

useEffect (()=>{
  axios.post("https://jsonplaceholder.typicode.com/users",{
    title: "Axios",
    body: "Axios Posted data",
    userId : 1
  })
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

  //get the data
  // axios.get("https://jsonplaceholder.typicode.com/users")
  // .then((response) =>{
  //   setUsers(response.data);
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   });
},[]);

return (
  <div>
    <h2>Users (Axios) </h2>
    <ul>
      {users.map((u)=>(
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  </div>
);

}
export default AxiosCompo;