import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';

import ProfileIcon from '../ProfileIcon';
import FriendIcon from './FriendIcon';

import { sendFriendRequest } from '../../store/ducks/invites'
import { removeFriend } from '../../store/ducks/users';


const UserInfo = ({ user, requested, setRequested }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser)

    if (!user) return null;


    return (
        <div className='profile__user-info'>
            <div className='profile__username'>
                <ProfileIcon user={user} size={'med'} />
                {!user ? null : user.username}
                {user.id === currentUser.id ? null : <FriendIcon currentUser={currentUser} user={user} requested={requested} setRequested={setRequested} />}
                {!user.name ? null : user.name}
            </div>
            <div className='profile__user-desc'>
                {!user.description ? null : user.description}
            </div>
        </div>
    )
}

export default UserInfo;