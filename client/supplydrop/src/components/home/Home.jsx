import React from "react";
import app from "../../config/firebase";
import * as firebase from 'firebase/app';
import SplashImage from '../../assets/images/SplashImage';

const Home = () => {
  const user = firebase.auth().currentUser;
  console.log(user.getIdToken());
  return (
    <div className="landing-page-container">
      <div className="landing-page main">
        <div className="main-left">
          <h1 className="main-title-text">
            Help out, reach out, assist with providing supplies to medical
            professionals on the frontlines.
          </h1>
          <p>
            The world has the means to produce and share medical supplies. We
            match those in need with those able to give - securely and safely.
          </p>
        </div>
        <button className="signup button">Sign Up</button>

        <div className="landing-page main-right">
          <img
            src={SplashImage}
            alt="hopeful looking doctor"
          />
        </div>
      </div>

      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Home;
