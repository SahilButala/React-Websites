import React from 'react'
import "./Quality.css"
import bg2 from "../../../assets/sm_b01.png"
import Q2 from './Quality02/Q2'
const Quality = () => {
  return (
    <div>
    <section className="quality">
        <div className="container">
            <div className="two-part">
                <div className="left-sec">
                        <h4>QUALITY WORK</h4>
                       <h2 className="sub-t">Designed & Developed <br/>by <span>Professionals.</span></h2>
                       <p className="sub-p">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       </p>
                       <div className="q-btn"><button>Learn more</button></div>
                </div>
                <div className="right-sec">
                    <img src={bg2} alt="" />
                </div>
            </div>
        </div>
    </section>
            <Q2/>
    </div>
  )
}

export default Quality
