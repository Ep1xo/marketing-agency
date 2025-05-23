import React, { useState } from "react";

const MenuBlock = ({ isOpen, onClose }) => {
  if (!isOpen) return null;


  return (
    <div className="wrapper">
      <p className="wrapper-left-side">
        let's <span>discuss</span>
      </p>

      <div className="wrapper-right-side">
        <p className="wrapper-right-close-btn" onClick={onClose}>CLOSE</p>
        <p className="wrapper-right-side-topics">about</p>
        <p className="wrapper-right-side-topics">cases</p>
        <p className="wrapper-right-side-topics">contacts</p>
        <p className="wrapper-right-side-topics">team</p>
      </div>
    </div>
  )
};

export default MenuBlock;