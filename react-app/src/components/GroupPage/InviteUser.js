import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Username from './Username';


const InviteUser = ({ openInvite, setOpenInvite, group, user, users }) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('')

    let friends = [];
    if (user.friends) {
        for (let friend in user.friends) {
            friends.push(users[`"${user.friends[friend]}"`])
        }
    }


    return (
        <div className='group-header__invite-backdrop' onClick={() => setOpenInvite(false)} >
            <div className='group-header__invite' onClick={(e) => e.stopPropagation()} >
                {!friends.length ? null : friends.map(friend => {
                    return <Username currentUser={user} user={friend} key={friend.id} openInvite={openInvite} setOpenInvite={setOpenInvite} group={group} />
                })}
            </div>
        </div>
    )
}

export default InviteUser;