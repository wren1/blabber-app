import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';

import ProfileIcon from '../ProfileIcon';



const FriendListItem = ({ friend }) => {
    const dispatch = useDispatch();


    return (
        <NavLink to={`/users/${friend.id}`}>
        <div className='sidebar__list-item'>
            <ProfileIcon user={friend} size={'small'} />
            <div className='sidebar__list-name'>
            {friend.username}

            </div>
        </div></NavLink>
    )
}

export default FriendListItem;