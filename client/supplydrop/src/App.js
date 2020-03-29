import React from 'react';
import Home from './components/home/Home';
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp';
import { AuthProvider } from './components/auth/Auth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>
        </div>
      </Router>
    </AuthProvider>
  )
}
export default App;
