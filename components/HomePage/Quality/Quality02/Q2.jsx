import React from 'react'
import "./Q2.css"
import bg3 from "../../../../assets/sb_02.png"
const Q2 = () => {
  return (
    <div>
      <section className="q2">
        <div className="container">
         <div className="two-sec">
            <div className="left-sec">
                <img src={bg3} alt="" />
            </div>
            <div className="right-sec">
                <h6>STEPS</h6>
                <div className="titile-q">
                Easy to Get <span> Started</span>
                </div>
                <div className="lower-sec-q">
                    <li className='list'>
                        <div className="num">01</div>
                        <div className="detail-q">
                            <b>Register</b>
                            <p>Create an account with us using Google or Facebook.</p>
                        </div>
                    </li>
                    <li className='list'>
                        <div className="num">02</div>
                        <div className="detail-q">
                            <b>Register</b>
                            <p>Create an account with us using Google or Facebook.</p>
                        </div>
                    </li>
                    <li className='list'>
                        <div className="num">03</div>
                        <div className="detail-q">
                            <b>Register</b>
                            <p>Create an account with us using Google or Facebook.</p>
                        </div>
                    </li>
                </div>
            </div>
         </div>
        </div>
      </section>
    </div>
  )
}

export default Q2
