import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProfileSideBar from './ProfileSideBar';
import ProfileFeed from './ProfileFeed';

import { loadUserPosts } from '../../store/ducks/posts';
import { loadUser } from '../../store/ducks/users';


const ProfilePage = () => {
    const dispatch = useDispatch();
    let { userId } = useParams();
    
    const user = useSelector(state => state.users[`"${userId}"`]);

    useEffect(() => {
        (async () => {
            await dispatch(loadUser(userId))
            await dispatch(loadUserPosts(userId))
        })();
    }, []);
    
    console.log(userId)

    return (
        <div className='profile'>
            <ProfileSideBar user={user} />
            <ProfileFeed />
        </div>
    )
}

export default ProfilePage;