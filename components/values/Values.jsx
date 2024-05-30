import React from "react";
import "./Values.css";
import bg04 from "../../assets/bg02.svg";
import Pricing from "./Pricing/Pricing";
const Values = () => {
  return (
    <div>
      <section className="values">
        <div className="container">
          <div className="two-section-v grid">
            <div className="left-details">
              <div className="title">VALUES</div>
              <div className="titile-v">
                We Always Abide by Our <span>Principles.</span>
              </div>
              <p className="para-v">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="two-box grid">
                <div className="left-box">
                  <div className="box-top flex">
                    <i class="bx bx-shopping-bag"></i>
                    <h5>Affordable</h5>
                  </div>
                  <p>
                  We promise to offer you the best rate we can - at par with the industry standard.
                  </p>
                </div>
                <div className="right-box">
                  <div className="box-top flex">
                    <i class="bx bx-shopping-bag"></i>
                    <h5>Affordable</h5>
                  </div>
                  <p>
                  We promise to offer you the best rate we can - at par with the industry standard.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-img">
              <img src={bg04} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Pricing/>
      
    </div>
  );
};

export default Values;
