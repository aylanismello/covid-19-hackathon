import React, { useState, useEffect } from 'react';

function Login() {
    const state = {
        email: null,
        password: null,
    }

    const [login, setLogin] = useState(...state);

    return() {
        <div>
            <form onSubmit={handleSubmit}>
                <div className='field email'>
                    <label className='label' htmlFor='email'> E-Mail </label>
                    <div className='control'>
                        <input type='email' class/>
                    </div>
                </div>
                <div className='field password'>
                    <label htmlFor="password">Password</label>
                    <div className='control'>
                        <input type="password"/>
                    </div>
                </div>
            </form>
        </div>
    }

}

export default Login;