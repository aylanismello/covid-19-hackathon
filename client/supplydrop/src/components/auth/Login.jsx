import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../../config/firebase';
import { AuthContext } from './Auth';
import SignUp from './SignUp';

const Login = ({history}) => {
    const handleLogin = useCallback(
        async e => {
            e.preventDefault();

            const { email, password } = e.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        }, [history]
    )

    const handleClick = e => {
      e.preventDefault();
      history.push('/signup');
    };

    const {currUser} = useContext(AuthContext); 
    if (currUser) {
        return <Redirect to='/' />;
    }

    return (
      <div>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">
              Email
              <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password
                <input type="password" name="password"/>
            </label>
          </div>
          <button type="submit">Log In</button>
        </form>
        <button onClick={handleClick}>SIGN UP HERE</button>
      </div>
    );

};

export default withRouter(Login);