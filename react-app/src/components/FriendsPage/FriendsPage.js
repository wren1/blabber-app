import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import FriendsList from './FriendsList'

import { loadInvites } from '../../store/ducks/invites';
import { loadCurrentUser } from '../../store/ducks/currentUser';
import { loadFriends } from '../../store/ducks/users';


const FriendsPage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser)

    useEffect(() => {
        (async () => {
            await dispatch(loadCurrentUser())
            await dispatch(loadFriends(currentUser.id))
        })();
    }, []);

    return (
        <div className='friends-main'>
            <FriendsList />
        </div>
    )
}

export default FriendsPage;