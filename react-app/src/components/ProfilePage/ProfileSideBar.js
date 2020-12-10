import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import HomeButton from '../Sidebar/HomeButton';
import UserInfo from './UserInfo';


const ProfileSideBar = ({ user }) => {
    // const user = useSelector(state => state.users[`"${userId}"`]);

    return (
        <div className='profile__sidebar' >
            <HomeButton />
            <UserInfo user={user} />
        </div>
    )
}

export default ProfileSideBar;