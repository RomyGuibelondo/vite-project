import React from 'react';
import './App.css'
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Registration from './Registration';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App