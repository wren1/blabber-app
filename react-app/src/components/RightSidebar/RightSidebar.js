
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams, useHistory } from 'react-router-dom';

import { loadUserGroups } from '../../store/ducks/groups';
import { setCurrentUser } from '../../store/ducks/currentUser';
import { logout } from "../../services/auth";

import SidebarFriendsList from './SidebarFriendsList';
import ProfileIcon from '../ProfileIcon';
import Notifications from './Notifications';



const RightSidebar = ({ user, authenticated, setAuthenticated }) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const invites = useSelector(state => state.invites.received)
    let notifs = [];
    for (let invite in invites) {
        notifs.push(invites[invite])
    }
    const allUsers = useSelector(state => state.users)

    if (!user) return null;

    let friends = []

    
    user.friends.forEach(friendId => {
        if (allUsers[`"${friendId}"`]) {
            if (allUsers[`"${friendId}"`] !== undefined) friends.push(allUsers[`"${friendId}"`])
        }
    })


    const handleLogout = async (e) => {
                await logout();
                dispatch(setCurrentUser(null))
                window.location.href = '/login'
    }


    return (
        <div className='right sidebar'>
            <div className='sidebar__list right-sidebar'>
                <div className='right-sidebar__title'>
                    <NavLink to={`/users/${user.id}`} className='right-sidebar__user-link'>
                        <div className='sidebar-username'>
                            {user.username}
                        </div>
                        <ProfileIcon user={user} size={'med'} />
                    </NavLink>
                </div>
                <div onClick={handleLogout} className='sidebar-button'>
                    Logout
                </div>
                <Notifications notifs={notifs} />
                <SidebarFriendsList friends={friends}/>
            </div>
        </div>
    )
}

export default RightSidebar;