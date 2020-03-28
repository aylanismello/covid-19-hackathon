import React, { useState } from 'react';
import fire from './config/firebase';
import Login from './components/auth/Login'
import { AuthProvider } from './components/auth/Auth';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={signup}/>
        </div>
      </Router>
    </AuthProvider>
  )
}
export default App;
