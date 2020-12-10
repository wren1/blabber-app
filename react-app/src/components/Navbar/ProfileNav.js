import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProfileDropDown from './ProfileDropdown';


const ProfileNav = () => {
    const user = useSelector(state => state.currentUser)
    return (
        <div className='navbar__profilenav'>
            <ProfileDropDown user={user} />
        </div>
    )
}

export default ProfileNav;