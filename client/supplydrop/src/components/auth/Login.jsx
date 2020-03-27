import React, { useState, useEffect } from 'react';

function Login() {
    const [login, setLogin] = useState({email: null, password: null});

    const handleChange = (e) => {
        e.persist();

        setLogin(login => ({
            ...login,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password } = login;
        const user = {
            email: email,
            password: password,
        }

        this.props.login(user);
    };
    
    return(
        <div>
            <form >
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
                <input type='submit' onSubmit={handleSubmit}>Submit</input>
            </form>
        </div>
    )

};

export default Login;