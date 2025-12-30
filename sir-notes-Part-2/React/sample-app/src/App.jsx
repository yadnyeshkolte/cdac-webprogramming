import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Ex01Basic from './Ex01Basic'
// import Ex02EventHandling from './Components/Ex02EventHandling'//import the Component
// import Ex03UsingState from './Components/Ex03UsingState'
// import Ex04CalcApp from './Components/Ex04CalcApp'
// import { Ex05CrudApp } from './Components/Ex05CrudApp'
// import ParentComponent from './Components/Context_Api/Ex06UsingContext'
// import {  UserProvider } from './contexts/userContext'
import Ex07UsingEffect from './Components/Ex07UsingEffect'
import ParentComponent from './Components/ReduxExample/Ex09ReduxExample'
import EmployeeManager from './Components/ReduxEmployeesExample/employeeManager'
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>React Application with Redux</h1>
    <hr />
     {/*<Ex01Basic/>
      <Ex03UsingState/>
     <Ex02EventHandling/>
     <Ex04CalcApp/> 
     <Ex05CrudApp/> 
    <UserProvider>
      <ParentComponent/>
    </UserProvider>
    <Ex07UsingEffect/>
     <ParentComponent/>*/}
     <EmployeeManager/>
    </>
  )
}

