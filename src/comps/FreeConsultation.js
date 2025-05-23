import { React, useEffect, useState } from "react";
import axios from "axios";



const FreeConsultation = ({ isOpen, onClose }) => {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();
  const data = {
    Name: name,
    Email: mail,
    Details: details
  }

  axios.post('https://api.sheetbest.com/sheets/467c9001-3790-4f9d-b510-3efa18d3b729', data)
    .then((response) => {
      console.log(response);
      setName('');
      setMail('');
      setDetails('');
    })
  }
  
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="consultation-popup-background" onClick={handleBackgroundClick}>
      <div className="consultation-popup">
        <div className="consultation-popup-left-side">
          <p className="consultation-popup-left-side-upper">
            Let's become 
            <span>acquainted</span>
          </p>
        </div>

        <form className="consultation-popup-right-side" onSubmit={handleSubmit}>
          <input type="text" name="userName" placeholder="NAME" required
            onChange={(e) => setName(e.target.value)} value={name}/>
          <input type="text" name="userEmail" placeholder="E-MAIL" required
            onChange={(e) => setMail(e.target.value)} value={mail}/>
          <input type="text" name="userDetails" placeholder="DETAILS" required
            onChange={(e) => setDetails(e.target.value)} value={details}/>

          <button className="consultation-popup-left-side-bottom">
            send request
            <span></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FreeConsultation;