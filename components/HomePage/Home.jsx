import React from 'react'
import "./Home.css"
import bg01 from "../../assets/bg01.svg"
import brand from "../../assets/brands.png"
import Feature from './Feature/Feature'
import Quality from './Quality/Quality'
const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="container">
           <div className="two-section">
            <div className="left-home">
              <div className="home-detail-sec">
                <h3 className="titile">
                Beautiful React <br/>Templates <span>for you</span>.
                </h3>
                <p className="detail">Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.</p>
                <div className="search">
                <input type="text" placeholder="Your E-mail Address"/>
                <button>Get Started</button>
                </div>
                <div className="last-title">
                  <b>OUR TRUSTED CUSTOMERS</b>
                  <div className="last-img">
                    <img src={brand} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="right-home">
              <img src={bg01} alt="" />
            </div>
           </div>
        </div>
      </section>
      <Feature/>
      <Quality/>
    </div>
  )
}

export default Home
