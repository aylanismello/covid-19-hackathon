import React, { useState } from 'react';

function Login() {
    const [inputs, setInputs] = useState({email: " ", password: " "});
    const [ submit, setSubmit ] = useState(false);
    const { email, password } = inputs;

    function handleChange(e) {
        const  { name, value } = e.target;
        setInputs(inputs => ({
            ...inputs,
            [name]: value
        })
    )};

    const handleSubmit = e => {
        e.preventDefault();
        
        setSubmit(true);
        if (username && password){
            
        }

        this.props.login(user);
    };

    return(
        <div>
            <form onChange={handleChange}>
                <div className='field email'>
                    <label className='label' htmlFor='email'> E-Mail
                    <div className='control'>
                        <input type='email' name="email" value={handleChange(email)} />
                    </div>
                     </label>
                </div>
                <div className='field password'>
                    <label htmlFor="password">Password
                    <div className='control'>
                        <input type="password" name="password" value={handleChange(password)}/>
                    </div>
                    </label>
                </div>
                <button type='submit' onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )

};

export default Login;