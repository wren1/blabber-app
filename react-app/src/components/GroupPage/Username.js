import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonIcon from '@material-ui/icons/Person';

import { sendGroupInvite } from '../../store/ducks/invites';


const Username = ({ openInvite, setOpenInvite, group, currentUser, user, invites, members, sentInvites }) => {
    const dispatch = useDispatch();
    let stat;

    if (members.includes(user)) {
        stat = 'member';
    } else if (sentInvites.includes(user.id)) {
        stat = 'invited'
    } else {
        stat = 'notInvited';
    }
    const [status, setStatus] = useState(stat)

    const handleClick = () => {
        dispatch(sendGroupInvite(user.username, group.id))
        setStatus('invited')
    }

    const inviteStatus = () => {
        if (status === 'member') {
            return (
                <PersonIcon className='group-header__invite-icon--member' />
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