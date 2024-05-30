import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
        <section className='Footer'>
           <div className="container">
               <div className="Footer-sec">
                <div className="top-sec-fo">
                    <li className='fo-list'>
                        <h6>MAIN</h6>
                         <li>blog</li>
                         <li>FAQs</li>
                         <li>Support</li>
                         <li>About Us</li>
                    </li>
                    <li className='fo-list'>
                        <h6>PRODUCT</h6>
                         <li>blog</li>
                         <li>FAQs</li>
                         <li>Support</li>
                         <li>About Us</li>
                    </li>
                    <li className='fo-list'>
                        <h6>PRESS</h6>
                         <li>blog</li>
                         <li>FAQs</li>
                         <li>Support</li>
                         <li>About Us</li>
                    </li>
                    <li className='fo-list'>
                        <h6>LEGAL</h6>
                         <li>blog</li>
                         <li>FAQs</li>
                         <li>Support</li>
                         <li>About Us</li>
                    </li>
                    <li className='fo-list'>
                        <h6>TEAM</h6>
                         <li>blog</li>
                         <li>FAQs</li>
                         <li>Support</li>
                         <li>About Us</li>
                    </li>
                </div>
                <hr/>
                <div className="bottom-sec">
                    <li className='logo-f'>
                    <img src="https://treact.owaiskhan.me/static/media/logo-light.d9a5d1b5be5ea077b26864fdfc2e96a4.svg" alt="" />
                       <h2> TREACT INC.</h2>
                    </li>
                    <li className='copyright'><p>© 2018 Treact Inc. All Rights Reserved.</p></li>
                    <li className='social'>
                               <button><i class='bx bxl-facebook' ></i></button>
                               <button><i class='bx bxl-youtube' ></i></button>
                               <button><i class='bx bxl-twitter' ></i></button>
                    </li>
                </div>
               </div>
           </div>
        </section>

    </footer>
   
  )
}

export default Footer
