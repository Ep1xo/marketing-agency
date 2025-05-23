import { React, useState } from "react";
import axios from "axios";
import './styles/header.css';
import './styles/fonts.css';
import './styles/welcome-block.css';
import './styles/about-us.css';
import './styles/strong-offer.css';
import './styles/unic-brand.css';
import './styles/services.css';
import './styles/latest-projects.css';
import './styles/contact-us.css';
import './styles/footer.css';
import './styles/comps-styles/MenuBlock.css';
import './styles/comps-styles/FreeConsultation.css';
import MenuBlock from "./comps/MenuBlock";
import FreeConsultation from "./comps/FreeConsultation";
import { ServiceProposals } from "./comps/ServiceProposals";

function App() {

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [isConsultation, setIsConsultation] = useState(false);

  const openConsultation = () => {
    setIsConsultation(true);
  };

  const closeConsultation = () => {
    setIsConsultation(false);
  };

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
          <p className="header-right-side-menu-btn" onClick={openMenu}>menu</p>
          <p className="header-right-side-say-hello-btn">say hello</p>
        </div>
      </header>

      <MenuBlock isOpen={isMenuOpen} onClose={closeMenu} />

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
          <p className="unic-brand-block-bottom-bottom" onClick={openConsultation}>free consultation</p>
        </div>
      </div>

      <FreeConsultation isOpen={isConsultation} onClose={closeConsultation}/>

      <div className="services-block">
        <div className="services-block-header-part">
          <p className="services-block-header-part-font-1">
            improve your <br/>
            <span>business efficiency</span>
          </p>
          <p className="services-block-header-part-font-2">
            with our services
          </p>
        </div>

        <div className="services-block-grid">
          <ServiceProposals name="Strategy" description="We determine the brand's place in the market, how it will develop, and most importantly, who will be its target audience. " />
          <ServiceProposals name="Communications and advertising" description="A strong brand should attract attention. Creatives, messages and channels of communication with the consumer." />
          <ServiceProposals name="Branding" description="We determine the brand's place in the market, how it will develop, and most importantly, who will be its target audience. " />
          <ServiceProposals name="Production" description="The key to a successful production is primarily responsible production work. We can assemble a team for a task of any complexity and coordinate the project." />
        </div>
      </div>

      <div className="latest-projects">
        <div>
          <p>ready to see your <br/> project featured here?</p>
          <div className="latest-projects-top-container">
            <div className="latest-projects-top-container">
              <p className="latest-projects-top-container-btn">contact us</p>
              <p className="latest-projects-top-container-arrow"></p>

              <p className="latest-projects-top-container-naming">
                latest
                <span>projects</span>
              </p>
            </div>
          </div>
        </div>

        <div className="latest-projects-bottom">
          <div className="project-1">
            <p className="project-name-1">Branding, Production, Strategy</p>
            <div className="project-image-container-1">
              <p className="project-image-container-image-1"></p>
              <p className="project-image-container-btn-1">learn more</p>
            </div>
            <p className="project-description-1">here will be the name of the project</p>
          </div>

          <div className="project-2">
            <p className="project-name-2">Strategy, Branding</p>
            <div className="project-image-container-2">
              <p className="project-image-container-image-2"></p>
              <p className="project-image-container-btn-2">learn more</p>
            </div>
            <p className="project-description-2">here will be the name of the project</p>
          </div>

          <div className="project-3">
            <p className="project-name-3">Pre-Production, Strategy</p>
            <div className="project-image-container-3">
              <p className="project-image-container-image-3"></p>
              <p className="project-image-container-btn-3">learn more</p>
            </div>
            <p className="project-description-3">here will be the name of the project</p>
          </div>

          <div className="project-4">
            <p className="project-name-4">Branding</p>
            <div className="project-image-container-4">
              <p className="project-image-container-image-4"></p>
              <p className="project-image-container-btn-4">learn more</p>
            </div>
            <p className="project-description-4">here will be the name of the project</p>
          </div>
        </div>
      </div>

      <div className="contact-us-block">
        <p className="contact-us-block-top-part">
          <span>Ready to take the next step </span>
          and change 
          <span> your buisness?</span>
        </p>

        <div className="contact-us-block-bottom-part">
          <div className="contact-us-block-bottom-part-left-side">
            <p className="contact-us-block-bottom-part-left-side-p1">
              contact
              <span> us</span>
            </p>
            <p className="contact-us-block-bottom-part-left-side-p2">
              submit the form
              <span></span>
            </p>
          </div>

          <form className="contact-us-block-bottom-part-right-side" onSubmit={handleSubmit}>
            <input type="text" name="Name" placeholder="NAME" required
              onChange={(e) => setName(e.target.value)} value={name}/>
            <input type="text" name="Email" placeholder="E-MAIL" required
              onChange={(e) => setMail(e.target.value)} value={mail}/>
            <input type="text" name="Details" placeholder="DETAILS" required
              onChange={(e) => setDetails(e.target.value)} value={details}/>
            <button>send</button>
          </form>
        </div>
      </div>

      <div className="footer-block">
        <div className="footer-block-top">
          <p className="footer-block-top-left-side">logo agency</p>
          <div className="footer-block-top-right-side">
            <p className="footer-block-top-right-side-1">about us</p>
            <p className="footer-block-top-right-side-2">our team</p>
            <p className="footer-block-top-right-side-3">cases</p>
            <p className="footer-block-top-right-side-1">faq</p>
          </div>
        </div>

        <div className="footer-block-middle">
          <p className="footer-block-middle-contacts"><span>Phone: </span>+380505631697</p>
          <p className="footer-block-middle-contacts"><span>E-mail: </span>sparkway_ma@gmail.com</p>
          <p className="footer-block-middle-contacts"><span>Adress: </span>69041, Kyiv, Nezalezhnaya st.</p>
          <span className="footer-block-middle-contacts-icon-1"></span> 
          <span className="footer-block-middle-contacts-icon-2"></span> 
          <span className="footer-block-middle-contacts-icon-3"></span> 
          <span className="footer-block-middle-contacts-icon-4"></span>
        </div>

        <div className="footer-block-bottom">
          <div className="footer-block-bottom-left-side">
            <p>2024. All rights reserved.</p>
            <p>Privacy policy.</p>
            <p>Terms and conditions</p>
          </div>

          <p className="footer-block-bottom-right-side">
            design by <span>KSENIA ZBOROVSKA</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;