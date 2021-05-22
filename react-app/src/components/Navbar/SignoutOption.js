import React from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentUser } from '../../store/ducks/currentUser';
import { logout } from "../../services/auth";


const SignoutOption = ({ user, setAuthenticated }) => {
    const dispatch = useDispatch();

    const onLogout = async (e) => {
        await logout();
        dispatch(setCurrentUser(null))
        setAuthenticated(false);
  };

    return (
        <div className='profilenav__dropdown-option' onClick={onLogout}>
            Sign out
        </div>
    )
}

export default SignoutOption;