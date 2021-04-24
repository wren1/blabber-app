import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';

import { sendFriendRequest } from '../../store/ducks/invites'
import { removeFriend } from '../../store/ducks/users';


const FriendIcon = ({ currentUser, user, requested, setRequested }) => {
    const dispatch = useDispatch();
    const [hover, setHover] = useState(false)
    
    const handleRemove = () => {
        dispatch(removeFriend(user.id))
    }

    const handleAdd = () => {
        dispatch(sendFriendRequest(user.id))
        setRequested(true)
    }

    if (!user) return null;

    if (currentUser.friends.includes(user.id)) {
            return (
                <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
                    {!hover ? <PersonIcon className='profile__friend-icon' /> : <PersonAddDisabledIcon className='profile__removeFriend-icon' onClick={handleRemove} />}
                </div>
            )
        }
        if (requested) {
            return (
                <div className='profile__requestedFriend-icon' >
                    <PersonOutlineIcon />
                </div>
            )
        } else {
            return (
                <div onClick={handleAdd} className='profile__addFriend-icon' >
                    <PersonAddIcon />
                </div>
            )
        }

}

export default FriendIcon;