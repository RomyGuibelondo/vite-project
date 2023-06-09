import React from 'react';
import './App.css'
import Login from './Login';
import Employee from './Employee';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Profile from './Profile';
import Home from './Home';
import AddEmployee from './AddEmployee';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='/employee' element={<Employee/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/create' element={<AddEmployee/>}></Route>
      </Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App