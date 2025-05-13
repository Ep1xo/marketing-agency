import React from "react";
import './styles/header.css';
import './styles/fonts.css';
import './styles/welcome-block.css';
import './styles/about-us.css';
import './styles/strong-offer.css';
import './styles/unic-brand.css';
import './styles/comps-styles/MenuBlock.css';
import { MenuBlock } from "./comps/MenuBlock";

function App() {
  return (
    <>
      <header>
        <div className="header-left-side">
          <p className="header-left-side-logo">logo agency</p>
          <div className="header-left-side-theme-switcher">
            <div className="theme light dark"></div>
          </div>
        </div>

        <div className="header-right-side">
          <p className="header-right-side-menu-btn">menu</p>
          <p className="header-right-side-say-hello-btn">say hello</p>
        </div>
      </header>

      <div className="welcome-block">
        <div className="welcome-block-top-part">
          <p className="welcome-block-top-part-font-1">SPARK WAY MARKETING</p>
          <p className="welcome-block-top-part-font-2">AGENCY</p>
          <p className="welcome-block-top-part-font-3">Welcome to SPARK WAY, where we specialize in igniting businesses and fueling their journey to success.</p>
        </div>

        <div className="welcome-block-bottom-part">
          <div className="welcome-block-bottom-part-left-side">
            <p className="welcome-block-bottom-part-left-side-font-1">We are more than an agency.</p>
            <p className="welcome-block-bottom-part-left-side-font-2">
              <span className="welcome-block-bottom-part-left-side-font-2-2">
                We are about: UNLOCKING POTENTIAL FUELING GROWTH SPARKING SUCCESS 
              </span>   
            </p>
          </div>

          <div className="welcome-block-bottom-part-right-side">
            <p>work <br/> with <br/> us</p>
            <span className="welcome-block-bottom-part-right-side-arrow"></span>
          </div>
        </div>
      </div>

      <div className="about-us-block">
        <div className="about-us-top">
          <h1 className="about-us-top-h1">who we are?</h1>
          <p className="about-us-top-p">
            <span>
              We're not just a marketing agency - we're
            </span> <br/> 
            your partners in growth 
          </p>
        </div>

        <div className="about-us-middle">
          <div className="about-us-middle-left-side"></div>

          <div className="about-us-middle-right-side">
            <p className="about-us-middle-right-side-top-text">
              We believed that businesses deserved more than cookie-cutter solutions – they deserved a partner who truly understood their unique challenges and aspirations.
            </p>
            <p className="about-us-middle-right-side-bottom-text">
              Born from a passion for creativity and a drive to make a difference, SPARK WAY was founded by a team of seasoned professionals who saw a gap in the market. 
            </p>
            <div className="about-us-middle-right-side-bottom">

            </div>
          </div>
        </div>

        <div className="about-us-bottom">
          <div className="about-us-bottom-left-side">
            <p className="about-us-bottom-left-side-top-text">
              <span>OUR AGENCY wanted to be</span><br/> 
              more than just service providers
            </p>
            <p className="about-us-bottom-left-side-bottom-text">we wanted to be trusted advisors, guiding our clients through every step of their journey to success.</p>
          </div>
          <div className="about-us-bottom-right-side"></div>
        </div>
      </div>

      <div className="strong-offer-block">
        <h1 className="strong-offer-block-left-side">
          We can do everything, but you don't need everything.
        </h1>

        <div className="strong-offer-block-right-side">
          <p className="strong-offer-block-right-side-top">
            many businesses face various problems and challenges that hinder their development and growth.
          </p>

          <p className="strong-offer-block-right-side-bottom">
            <span>PROBLEMS:</span>
            Insufficient visibility <br/>Low conversion rate <br/>Outdated marketing strategies <br/>Insufficient audience <br/>Low commitment and customer loyalty
          </p>
        </div>
      </div>

      <div className="unic-brand-block">
        <p className="unic-brand-block-top">
          <span>your brand is unique, so we will</span> <br/> walk your way together.
        </p>

        <div className="unic-brand-block-bottom">
          <p className="unic-brand-block-bottom-top">We believe that every company has the potential to grow and develop, and our mission is to help them realize that potential.</p>
          <p className="unic-brand-block-bottom-middle">Our agency's work methodology is focusing and solving the real marketing problems of your company.</p>
          <p className="unic-brand-block-bottom-bottom">free consultation</p>
        </div>
      </div>
    </>
  );
}

export default App;
