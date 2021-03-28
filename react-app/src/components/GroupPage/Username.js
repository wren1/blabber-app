import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { sendGroupInvite } from '../../store/ducks/invites';


const Username = ({ openInvite, setOpenInvite, group, currentUser, user }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(sendGroupInvite(user.username, group.id))
        setOpenInvite(false)
    }

    return (
        <div className='group-header__invite-username' onClick={handleClick} >
            {user.username}
        </div>
    )
}

export default Username;