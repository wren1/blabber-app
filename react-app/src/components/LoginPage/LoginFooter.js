import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


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