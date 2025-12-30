import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';

export default function ChildComponent() {
   const [modifiedName, setModifiedName] = useState('');
   const dispatch = useDispatch();//This shall map UR action and state. 
   
   const handleChange = ()=>{
        dispatch(updateName(modifiedName))//dispatch shall trigger the action and pass modified state to the reducer. 
    }
  return (
    <div>
        <h3>ChildComponent</h3>
        <input type='text' value={modifiedName}  onChange={(e) => setModifiedName(e.target.value)} placeholder='Modify the User name'/>
        <button onClick={handleChange}>Update User</button>
    </div>
  )
}
