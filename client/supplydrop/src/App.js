import React from 'react';
import Home from './components/home/Home';
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp';
import Map from './components/map/Map';
import { AuthProvider } from './components/auth/Auth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';
import "mapbox-gl/dist/mapbox-gl.css";

const App = () => {
  return (
    // <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Map}/>
          {/* <PrivateRoute exact path="/" component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={SignUp}/> */}
        </div>
      </Router>
    // </AuthProvider>
  )
}
export default App;
