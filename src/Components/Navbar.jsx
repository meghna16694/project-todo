import React from 'react'
import {Link} from 'react-router-dom'
import img2 from './img1.webp'


function Navbar() {
  return (
    
    <div >
    <div style={{display: 'flex',justifyContent:'space-evenly',backgroundColor:'black',fontSize:'30px',padding:'20px'}}>
        <Link to = '/' style={{textDecoration:'none',color:'white'}} >Home</Link>
        <Link to = '/Todos'  style={{textDecoration:'none',color:'white'}}>Todos</Link>
        <Link to = '/LocalStorage'  style={{textDecoration:'none',color:'white'}} >LocalStorage</Link>
        

       
    </div>
    


   </div>
  
  )
}

export default Navbar