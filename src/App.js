import React from "react";
import './styles/header.css';
import './styles/fonts.css';
import './styles/welcome-block.css';
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
    </>
  );
}

export default App;
