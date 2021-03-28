import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Username from './Username';

import { sendGroupInvite } from '../../store/ducks/invites';


const InviteUser = ({ openInvite, setOpenInvite, group, user, users }) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('')
    let friends = [];
    if (user.friends) {
        for (let friend in user.friends) {
            friends.push(users[`"${user.friends[friend]}"`])
        }
    }

    console.log('friends: ', friends)

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
            {!friends.length ? null : friends.map(friend => {
                return <Username currentUser={user} user={friend} key={friend.id} openInvite={openInvite} setOpenInvite={setOpenInvite} group={group} />
            })}
            {/* <input className='invite-user-input' placeholder='username' value={username} name='username' onChange={(e) => setUsername(e.target.value)}/> */}
            {/* <div className='buttons'> */}
                    {/* <button onClick={handleCancel} className='button'>Cancel</button>
                    <button type='submit' className='button'>Submit</button> */}
            {/* </div> */}
        </form>
    )
}

export default InviteUser;