import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import HomeButton from '../Sidebar/HomeButton';
import UserInfo from './UserInfo';
import UserIcon from '../UserIcon';


const ProfileHeader = ({ user }) => {
    // const user = useSelector(state => state.users[`"${userId}"`]);
    console.log('P H: ', user)
    if (!user) return null;

    return (
        <div className='profile_header' >
            <UserIcon user={user} />
            <HomeButton />
            <UserInfo user={user} />
        </div>
    )
}

export default ProfileHeader;