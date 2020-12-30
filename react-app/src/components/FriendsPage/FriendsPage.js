import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import FriendsList from './FriendsList'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar'

import { loadInvites } from '../../store/ducks/invites';
import { loadCurrentUser } from '../../store/ducks/currentUser';
import { loadFriends } from '../../store/ducks/users';


const FriendsPage = () => {
    const { userId } = useParams();
    console.log(userId)
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser)

    useEffect(() => {
        (async () => {
            await dispatch(loadCurrentUser())
            await dispatch(loadFriends(userId))
        })();
    }, []);

    return (
        <div className='friends-main'>
            <Sidebar user={currentUser} />
            <Navbar user={currentUser} />
            <FriendsList userId={userId} />
        </div>
    )
}

export default FriendsPage;