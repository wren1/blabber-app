import React from 'react';
import { useSelector } from 'react-redux';

import ProfileIcon from '../ProfileIcon';
import FriendIcon from './FriendIcon';


const UserInfo = ({ user, requested, setRequested }) => {
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