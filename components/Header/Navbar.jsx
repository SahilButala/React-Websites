import React, { useState } from 'react'
import "./Navbar.css"

function Navbar() {
  const [Navbar , SetNavbar] = useState(false)
  const [Close ,SetClose] = useState(true)
  return (
    <div>
    <div className="header">
      <div className="container">
        <div className="logo">
          <img src="https://treact.owaiskhan.me/static/media/logo.2c489fc453a1783cbadacf914efa3df6.svg" alt="" />
          <h5>Treact</h5>
        </div>
        <div className="navlinks">
          <ul className= {Navbar ? "links active" : "links"}>
            <li>home</li>
            <li>blog</li>
            <li>pricing</li>
            <li>contact us</li>

        
          </ul>
            <div className="icon" id='bar'  >
            <i class='bx bx-menu-alt-right' onClick={()=>SetNavbar(!Navbar)} > </i>
            </div>
          <div className="second-link">
            <li>login</li>
            <button id='sign-up'>sign up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
