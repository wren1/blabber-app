import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import HomeButton from '../Sidebar/HomeButton';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import PersonIcon from '@material-ui/icons/Person';
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
    // let isFriend = currentUser.friends.includes(user.id)
    // const [isRequested, setIsRequested] = useState(friend);
    console.log('P H: ', user)
    if (!user) return null;

    // const handleRequestFriend = () => {
    //     dispatch(sendFriendRequest(user.username))
    // }

    // let isRequested = false;
    // if (invites) {
    //     for (let i in invites) {
    //         if (invites[i].type === 'friend' && invites[i].invitee_id === user.id) {
    //             isRequested = true;
    //         }
    //     }
    // }
    // const [requested, setRequested] = useState(false)
    if (invites) {
        for (let i in invites) {
            if (invites[i].type === 'friend' && invites[i].invitee_id === user.id && !requested) {
                // isRequested = true;
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