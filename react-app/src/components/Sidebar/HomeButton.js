import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const HomeButton = () => {

    return (
        <div className='sidebar-logo'>
            <img src={require('../../images/wh.png')} className='home-logo' />
        </div>
    )
}

export default HomeButton;