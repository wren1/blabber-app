import React from 'react';
import { useSelector } from 'react-redux';

import FriendIcon from './FriendIcon';
import HeaderIcon from '../HeaderIcon';


const UserInfo = ({ user, requested, setRequested }) => {
    const currentUser = useSelector(state => state.currentUser)

    if (!user) return null;


    return (
        // <div className='profile__user-info'>
            <div className='profile__username'>
                <HeaderIcon item={user} />
                {user.id === currentUser.id ? null : <FriendIcon currentUser={currentUser} user={user} requested={requested} setRequested={setRequested} />}
            </div>
            // {/* <div className='profile__user-desc'>
                // {!user.description ? null : user.description}
            // </div>
        // </div> */}
    )
}

export default UserInfo;