import { useEffect, useState } from "react";

function FetchApiCompo(){

const [albums,setAlbums]=useState([]);
//posting the data
//useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/albums",{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//       id:1011,
//       title: "Devotional",
//       userId: 111,

//     })
//   })
//   .then(res =>res.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));
// },[]);
//Getting the data
useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/albums")
   .then((response)=>response.json())
   .then((data)=> setAlbums(data))
   .catch((error)=>console.log(error));
 },[]);
return (
  <div>
    <h2>Albums (Fetch)</h2>
    <ul>
      {albums.map((a)=>(
        <li key={a.userId}>{a.title}</li>
      ))}
    </ul>
  </div>
);

}
export default FetchApiCompo;