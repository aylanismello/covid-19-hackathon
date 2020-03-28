import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../../config/firebase';
import { AuthContext } from './Auth';

function Login() {
    const handleLogin = useCallback(
        async e => {
            e.preventDefault();

            const { email, password } = e.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                window.history.push('/');
            } catch (error) {
                alert(error);
            }
        }, []
    )

    const {currUser} = useContext(AuthContext); 

    if (currUser) {
        return <Redirect to='/' />;
    }

    return (
      <div>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">
              <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label htmlFor="password">
                <input type="password" name="password"/>
            </label>
          </div>
        </form>
      </div>
    );

};

export default withRouter(Login);