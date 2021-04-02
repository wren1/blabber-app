import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { sendGroupInvite } from '../../store/ducks/invites';


const Username = ({ openInvite, setOpenInvite, group, currentUser, user, invites }) => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState('notInvited')
    // const invites = useSelector(state => state.invites.sent);
    // statuses: member, invited, notInvited

    if (group.members.includes(user.id)) {
        setStatus('member')
    } else if (invites.includes(user.id)) {
        setStatus('invited')
    }

    const handleClick = () => {
        dispatch(sendGroupInvite(user.username, group.id))
        setOpenInvite(false)
    }

    const inviteStatus = () => {
        if (status === 'member') {
            return (
                <AccountCircleIcon className='group-header__invite-icon--member' />
            )
        }
        else if (status === 'invited') {
            return (
                <PersonIcon className='group-header__invite-icon--invited' />
            )
        }
        else {
            return (
                <PersonOutlineIcon className='group-header__invite-icon' onClick={handleClick} />
            )
        }
    }

    return (
        <div className='group-header__invite-user' >
            <div className='group-header__invite-username'>
                {user.username}
            </div>
            <div className='group-header__invite-status'>
                {inviteStatus()}
            </div>
        </div>
    )
}

export default Username;