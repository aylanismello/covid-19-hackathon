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
                <div className='field'>
                    <label className='label'> E-Mail </label>
                    <div className='control'>
                        <input class></input>
                    </div>

                </div>
            </form>
        </div>
    }

}