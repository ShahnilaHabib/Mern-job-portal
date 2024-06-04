import { useState } from 'react'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>Nav Bar</nav>
    <Outlet/>
   
    </>
  )
}

export default App