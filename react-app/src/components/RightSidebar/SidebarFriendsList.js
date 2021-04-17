import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadUserGroups } from '../../store/ducks/groups';

import FriendListItem from './FriendListItem';


const SidebarFriendsList = ({ friends }) => {
    const dispatch = useDispatch();
    // const user = useSelector(state => state.currentUser);
    // const groups = useSelector(state => state.currentUser.groups.map(groupId => state.groups[`"${groupId}"`]))
    // const allGroups = useSelector(state => state.groups)

    // if (!user) return null;

    let groups = []
    // if (!user) return null;

    // if (user) {

    
    // user.groups.forEach(groupId => {
    //     if (allGroups[`"${groupId}"`]) {
    //         if (allGroups[`"${groupId}"`] !== undefined) groups.push(allGroups[`"${groupId}"`])
    //     }
    // })}

    // useEffect(() => {
    //     (async () => {
    //         if (user) {
    //             await dispatch(loadUserGroups(user.id))
    //         }
    //     })();
    // }, []);


    return (
        <div className='sidebar__friendsList'>
            <div className='sidebar-title'>
                Friends
            </div>
            {!friends ? null : friends.map(friend => (
                <FriendListItem friend={friend} key={friend.id} />
            )
            )}
        </div>
    )
}

export default SidebarFriendsList;