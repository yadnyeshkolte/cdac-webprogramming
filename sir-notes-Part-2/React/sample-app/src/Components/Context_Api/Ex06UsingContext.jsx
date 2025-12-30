//Using context hook. New in React, allows to share data among components within the React App. 
//Props allow to share data among the parent and child components. Its always from Parent to child. if the levels are deeper, it becomes more complex to maintain. This issue is called as Props DRILLING. 
//With Context hook, U no longer need Props to share the data, child can also modify the data and reflect to the parent and data can be shared even among non related components. Typical example is to share the User credentials across the components for ensuring secured users to access the components.
//Steps: Create a Context, create the object in Parent component, refer/access it across the components. 

//This component we create shall be the Parent component. 
import React from 'react'
import { UserContext, useUser } from '../../contexts/userContext'
import ChildComponent from './Ex06ChildComponent'
import ChildComponent2 from './Ex06ChildComponent2'

export default function ParentComponent() {
  const { userDetail } = useUser();
  //This Component shall provide the data for the context which will be refered among the child components
  return (
    <div>
        <h1>Using Context in parent component</h1>
        <p>The Current User: {userDetail}</p>
        <div>
        <ChildComponent/>
        <ChildComponent2/>
        </div>
        
    </div>
  )
}
