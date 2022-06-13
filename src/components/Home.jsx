import React from 'react'
import {Link} from 'react-router-dom';
import './style/home.css'

function Home() {
  return (
    <div className="main-box">
      <div className="popup-box">
        <p>Successfully Login</p>
        <Link style={{width:"50px", backgroundColor:"blue"}} to="login">Logout</Link>
      </div>
    </div>
  )
}

export default Home