import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadUserGroups } from '../../store/ducks/groups';



const FriendListItem = ({ user }) => {
    const dispatch = useDispatch();
    // const user = useSelector(state => state.currentUser);
    // const groups = useSelector(state => state.currentUser.groups.map(groupId => state.groups[`"${groupId}"`]))
    // const allGroups = useSelector(state => state.groups)


    return (
        <div className='right-sidebar__friendslist-item'>
        </div>
    )
}

export default FriendListItem;