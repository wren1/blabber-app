import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';

import { loadUserGroups } from '../../store/ducks/groups';

import ProfileIcon from '../ProfileIcon';



const FriendListItem = ({ friend }) => {
    const dispatch = useDispatch();
    // const user = useSelector(state => state.currentUser);
    // const groups = useSelector(state => state.currentUser.groups.map(groupId => state.groups[`"${groupId}"`]))
    // const allGroups = useSelector(state => state.groups)


    return (
        <NavLink to={`/users/${friend.id}`}>
        <div className='right-sidebar__friendslist-item'>
            <ProfileIcon user={friend} size={'small'} />
            <div className='right-sidebar__friendslist-username'>
            {friend.username}

            </div>
        </div></NavLink>
    )
}

export default FriendListItem;