import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { sendGroupInvite } from '../../store/ducks/invites';


const InviteUser = ({ openInvite, setOpenInvite, group, user }) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendGroupInvite(username, group.id))
        setOpenInvite(!openInvite)
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setOpenInvite(!openInvite)
    }

    return (
        <form className='group-header__invite' onSubmit={handleSubmit}>
            <input className='invite-user-input' placeholder='username' value={username} name='username' onChange={(e) => setUsername(e.target.value)}/>
            <div className='buttons'>
                    <button onClick={handleCancel} className='button'>Cancel</button>
                    <button type='submit' className='button'>Submit</button>
                </div>
        </form>
    )
}

export default InviteUser;