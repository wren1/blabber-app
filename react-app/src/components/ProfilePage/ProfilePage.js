import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProfileHeader from './ProfileHeader';
import ProfileFeed from './ProfileFeed';

import { loadUserPosts } from '../../store/ducks/posts';
import { loadUser } from '../../store/ducks/users';


const ProfilePage = () => {
    const dispatch = useDispatch();
    // let { userId } = useParams();
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
            <ProfileHeader user={user} />
            <ProfileFeed />
        </div>
    )
}

export default ProfilePage;