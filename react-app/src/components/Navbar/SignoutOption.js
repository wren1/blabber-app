import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setCurrentUser } from '../../store/ducks/currentUser';
import { logout } from "../../services/auth";


const SignoutOption = ({ user, setAuthenticated }) => {
    const dispatch = useDispatch();

    const onLogout = async (e) => {
        await logout();
        setAuthenticated(false);
        dispatch(setCurrentUser(null))
  };

    return (
        <div className='profilenav__dropdown-option' onClick={onLogout}>
            Sign out
        </div>
    )
}

export default SignoutOption;