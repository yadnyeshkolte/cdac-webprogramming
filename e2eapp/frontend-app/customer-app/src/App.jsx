import './App.css'
import Customers from './components/Customer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <h1 className="h1 text-danger">Customer Management Software</h1>
      <hr />
      
      <NavBar />
      <Customers/>
    </>
  )
}

export default App