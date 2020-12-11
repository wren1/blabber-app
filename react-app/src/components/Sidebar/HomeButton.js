import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


const HomeButton = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/')
    }

    return (
        <div className='sidebar-logo'>
            <img src={require('../../images/wh.png')} className='home-logo' onClick={handleClick}/>
        </div>
    )
}

export default HomeButton;