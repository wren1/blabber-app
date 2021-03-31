import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

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

    return (
        <div className='group-header__invite-user' onClick={handleClick} >
            <div className='group-header__invite-username'>
                {user.username}
            </div>
            <div className='group-header__invite-status'>
                {}
            </div>
        </div>
    )
}

export default Username;