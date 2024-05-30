import React from 'react'
import  "./Banner.css"

const Banner = () => {
  return (
    <div>
      <section className='banner'>
        <div className="container">
            <div className="banner-section">
                <div className="cricle"></div>
                <div className="cricle"></div>
              <h3> Developers all over the world are<br/> happily using Treact.</h3>
               <div className="right-content">
                <button>get started</button>
                <button>contact us</button>
               </div>
      
            </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
