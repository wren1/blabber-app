import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const LoginHeader = () => {

    return (
        <div className='login__header'>
            <img src={require('../../images/blabber2.png')} className='login__header-image' />
        </div>
    )
}

export default LoginHeader;