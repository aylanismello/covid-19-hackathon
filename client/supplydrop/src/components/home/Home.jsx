import React from "react";
import app from "../../config/firebase";
import * as firebase from 'firebase/app';
import splash from './SplashImage.jpg';

const Home = () => {

  return (
    <div className="landing-page-container">
      <div className="landing-page main">
        <div className="left-col">
          <h1 className="main-title-text">
            Help out, reach out, and assist with providing supplies to medical
            professionals on the frontlines.
          </h1>
          <p className="main-body-text">
            The world has the means to produce and share medical supplies. We
            match those in need with those able to give securely and safely.
          </p>
          <div className='main-button-container'>
            <button className="signup button">Sign Up</button>
          </div>
        </div>

        <div className="right-col">
          <img className='splash-image' src={splash} alt="hopeful looking doctor" />
        </div>
      </div>
    </div>
  );
};

export default Home;
