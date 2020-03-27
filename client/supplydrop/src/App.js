import React, { useState } from 'react';
import fire from './config/firebase';
import Login from './components/auth/Login'

function App() {
  const [ user, setUser ] = useState({ user: null })

  const authListener = () => { fire.auth().onAuthStateChanged((user) =>{
    if (user) {
      setUser(user[0] = user);
    } else {
      setUser( user[0] = null);
    }
  })

  };
  return (
    <div className="App">
      {
        !user ? ("User Logged") : ("No User")
      }
    </div>
  );
}

export default App;
