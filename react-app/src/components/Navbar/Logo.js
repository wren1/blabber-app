import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';


const Logo = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/')
    }

    return (
        <div className='logo-button'>
            <img src={require('../../images/blabber.png')} className='logo' onClick={handleClick}/>
        </div>
    )
}

export default Logo;