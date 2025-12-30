import React from 'react'
import { useSelector } from 'react-redux'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
   const name = useSelector((state)=> state.user.name)//Get the data from the store.  
    return (
    <>
    <h2>Parent Component</h2>
    <hr />
    <p>The Current User: {name}</p>
    <ChildComponent/>
    </>
  )
}
