import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LocalStorage from './LocalStorage'
import Home from './Home'
import Todos from './Todos'


function AllRouter() {
  return (
  <>
  <Routes>
   <Route path='/' element = {<Home/>}></Route>
    <Route path='/Todos' element = {<Todos/>}></Route>
    <Route path='/LocalStorage' element = {<LocalStorage/>}></Route>
  </Routes>
  </>
  )
}

export default AllRouter