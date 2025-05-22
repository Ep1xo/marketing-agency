import React from "react";

const FreeConsultation = () => {

  return (
    <div className="consultation-popup-background">
      <div className="consultation-popup">
        <div className="consultation-popup-left-side">
          <p className="consultation-popup-left-side-upper">
            Let's become 
            <span>acquainted</span>
          </p>

          <p className="consultation-popup-left-side-bottom">
            send request
            <span></span>
          </p>
        </div>

        <div className="consultation-popup-right-side">
          <input type="text" name="userName" placeholder="NAME" required/>
          <input type="text" name="userEmail" placeholder="E-MAIL" required/>
          <input type="text" name="userDetails" placeholder="DETAILS" required/>
        </div>
      </div>
    </div>
  )
}

export default FreeConsultation;