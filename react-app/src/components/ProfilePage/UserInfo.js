import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { sendFriendRequest } from '../../store/ducks/invites'


const UserInfo = ({ user }) => {
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(sendFriendRequest(user.id))
    }

    return (
        <div className='profile__user-info'>
            {!user ? null : user.username}
            <div onClick={handleAdd}>add</div>
        </div>
    )
}

export default UserInfo;