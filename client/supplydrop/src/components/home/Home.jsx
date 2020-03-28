import React from "react";
import app from "../../config/firebase";
import * as firebase from 'firebase/app';

const Home = () => {
  const user = firebase.auth().currentUser;
  console.log(user.getIdToken());
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
