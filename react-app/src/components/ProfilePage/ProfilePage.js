import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProfileHeader from './ProfileHeader';
import ProfileFeed from './ProfileFeed';
import Sidebar from '../Sidebar/Sidebar';

import { loadUserPosts } from '../../store/ducks/posts';
import { loadUser } from '../../store/ducks/users';
import { loadInvites } from '../../store/ducks/invites';



const ProfilePage = () => {
    const dispatch = useDispatch();
    // let { userId } = useParams();
    let { userId } = useParams();
    
    const user = useSelector(state => state.users[`"${userId}"`]);
    const currentUser = useSelector(state => state.currentUser)

    useEffect(() => {
        (async () => {
            await dispatch(loadUser(userId))
            await dispatch(loadUserPosts(userId))
            await dispatch(loadInvites())
        })();
    }, []);
    
    console.log(userId)

    return (
        <div className='profile'>
            <Sidebar user={currentUser} />
            <ProfileHeader user={user} />
            <ProfileFeed />
        </div>
    )
}

export default ProfilePage;