import React, { useState, useEffect } from 'react';


const LoginFooter = ({ signup, setSignup }) => {

    return (
        <div className='login__footer'>
            <div className='login__signup-button' onClick={() => setSignup(!signup)}>
                    {!signup ? 'New User?' : 'Already have an account?'}
            </div>
        </div>
    )
}

export default LoginFooter;