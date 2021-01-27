import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import HomeButton from '../Sidebar/HomeButton';
import UserInfo from './UserInfo';
import UserIcon from '../UserIcon';
import ProfileIcon from '../ProfileIcon'

import { sendFriendRequest } from '../../store/ducks/invites';
import { setCurrentUser } from '../../store/ducks/currentUser';


const ProfileHeader = ({ user }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser);
    const invites = useSelector(state => state.invites.sent)
    const [requested, setRequested] = useState(false)
    console.log('P H: ', user)
    if (!user) return null;
    if (invites) {
        for (let i in invites) {
            if (invites[i].type === 'friend' && invites[i].invitee_id === user.id && !requested) {
                setRequested(true)
            }
        }
    }

    return (
        <div className='profile_header' >
            <div>
            <div className='profile-icon'><ProfileIcon user={user} size={'med'} /></div>
            <UserInfo user={user} requested={requested} setRequested={setRequested}/></div>
        </div>
    )
}

export default ProfileHeader;