import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SignUpForm from './SignupForm';


const SignupPage = ({ authenticated, setAuthenticated }) => {

    return (
        <div className='signup-main'>
            <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </div>
    )
}

export default SignupPage;