import React, { useState } from 'react'
import { useUser } from '../../contexts/userContext'//getting the reference of the context object...
export default function ChildComponent() {
   const { userDetail, setUserDetail} = useUser();
  return (
    <div>
        <h1>First ChildComponent</h1>
        <p>Welcome Mr. {userDetail} for joining us!!!</p>
        <p>
            <button onClick={(e) => {setUserDetail("Suresh"); currentUser = userDetail;}}>Change User</button>
        </p>
    </div>
  )
}
