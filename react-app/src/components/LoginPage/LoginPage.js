import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import LoginForm from './LoginForm';


const LoginPage = ({ authenticated, setAuthenticated }) => {

    return (
        <div className='login-main'>
            <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </div>
    )
}

export default LoginPage;