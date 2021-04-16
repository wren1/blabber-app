import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


const Logo = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/')
    }

    return (
        <div className='logo-button'>
            <img src={require('../../images/whale.png')} className='logo' onClick={handleClick}/>
        </div>
    )
}

export default Logo;