import React from "react";
import './styles/header.css';
import './styles/fonts.css';

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
    </>
  );
}

export default App;
