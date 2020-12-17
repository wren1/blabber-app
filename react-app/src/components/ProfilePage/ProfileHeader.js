import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import HomeButton from '../Sidebar/HomeButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import UserInfo from './UserInfo';
import UserIcon from '../UserIcon';

import { sendFriendRequest } from '../../store/ducks/invites';


const ProfileHeader = ({ user }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser);
    // let isFriend = currentUser.friends.includes(user.id)
    // const [isRequested, setIsRequested] = useState(friend);
    console.log('P H: ', user)
    if (!user) return null;

    const handleRequestFriend = () => {
        dispatch(sendFriendRequest(user.username))
    }

    return (
        <div className='profile_header' >
            <div>
            <div className='profile-icon'><UserIcon user={user} /></div>
            <UserInfo user={user} /></div>
        </div>
    )
}

export default ProfileHeader;