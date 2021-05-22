import React, { useState } from 'react';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';


const LoginPage = ({ authenticated, setAuthenticated }) => {
    const [signup, setSignup] = useState(false)

    return (
        <div className='login'>
            <div className='login__container'>
                <LoginHeader />
                {signup ? 
                <SignupForm authenticated={authenticated} setAuthenticated={setAuthenticated} /> :
                <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} /> }
                <LoginFooter signup={signup} setSignup={setSignup} />
            </div>
        </div>
    )
}

export default LoginPage;