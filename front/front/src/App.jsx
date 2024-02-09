import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Reagister from './Components/Reagister';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Navbar/>} />
  <Route path='/home' element={<Home/>} />
 <Route path='login' element={<Login/>} />
 <Route path='register' element={<Reagister/>} />
</Routes>

</BrowserRouter>




    </div>
  )
}

export default App