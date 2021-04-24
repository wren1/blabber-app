import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserInfo from './UserInfo';


const FriendIcon = ({ currentUser, user }) => {
    

    if (!user) return null;


    return (
        <div className='profile_header' >
            <div>
                <UserInfo user={user} requested={requested} setRequested={setRequested}/>
            </div>
        </div>
    )
}

export default FriendIcon;