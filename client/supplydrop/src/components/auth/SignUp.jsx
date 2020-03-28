import React, { useCallback } from 'react';
import {withRouter} from 'react-router';
import app from '../../config/firebase';

function SignUp() {
    const handleSignUp = useCallback( async e => {
        e.preventDefault();

        const { email, password } = e.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
                window.history.push("/");
        } catch (error){
            alert(error);
        }
    }, [] );

    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="email">
              Email
              <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password
              <input type="password" name="password" />
            </label>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
}

export default withRouter( SignUp );
