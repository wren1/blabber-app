import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProfileOption from './ProfileOption';
import ActivityOption from './ActivityOption';
import FriendsOption from './FriendsOption';
import SignoutOption from './SignoutOption';


const ProfileDropdown = ({ user }) => {

    return (
        <div className='navbar__profilenav-dropdown'>
            <ProfileOption user={user} />
            <ActivityOption user={user} />
            <FriendsOption user={user} />
            <SignoutOption user={user} />
        </div>
    )
}

export default ProfileDropdown;