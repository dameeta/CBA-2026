
import React from 'react'
import { useState } from 'react';
function UserState() {
  const [userName,setName]= useState("");

  return (
    <>
    <h2> User is : {userName}</h2>
    <button onClick={()=>setName("Krishna")}>getName</button>
    <div>UserState</div>
    </>
  )
}

export default UserState