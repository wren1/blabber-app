
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import { loadUserGroups } from '../../store/ducks/groups';
import { setCurrentUser } from '../../store/ducks/currentUser';
import { logout } from "../../services/auth";

import SidebarFriendsList from './SidebarFriendsList';
import ProfileIcon from '../ProfileIcon';



const RightSidebar = ({ user, setAuthenticated }) => {
    const dispatch = useDispatch();
    const invites = useSelector(state => state.invites.received)
    console.log('rec inv: ', invites)
    let sent = [];
    for (let invite in invites) {
        sent.push(invites[invite])
    }
    // const user = useSelector(state => state.currentUser);
    // const friends = useSelector(state => state.currentUser.friends.map(friendId => state.users[`"${friendId}"`]))
    const allUsers = useSelector(state => state.users)

    if (!user) return null;

    let friends = []
    // // if (!user) return null;

    // if (user) {

    
    user.friends.forEach(friendId => {
        if (allUsers[`"${friendId}"`]) {
            if (allUsers[`"${friendId}"`] !== undefined) friends.push(allUsers[`"${friendId}"`])
        }
    })

    // useEffect(() => {
    //     (async () => {
    //         if (user) {
    //             await dispatch(loadUserGroups(user.id))
    //         }
    //     })();
    // }, []);

    const handleLogout = async (e) => {
                await logout();
                dispatch(setCurrentUser(null))
                setAuthenticated(false);
    }


    return (
        <div className='right-sidebar'>
            <NavLink to={`/users/${user.id}`}>
                <div className='sidebar-user'>
                    <div className='sidebar-username'>
                        {user.username}
                    </div>
                    <ProfileIcon user={user} size={'med'} />
                </div>
            </NavLink>
            <div onClick={handleLogout} className='logout-button'>
                Logout
            </div>
            <NavLink to='/notifications' exact={true}>
                <div className='sidebar-notifications'>
                    <div className='sidebar-notifications-num'>
                        {!sent.length ? 0 : sent.length }
                    </div>
                    <div>Notifications</div>
                </div>
            </NavLink>
            <SidebarFriendsList friends={friends}/>
        </div>
    )
}

export default RightSidebar;