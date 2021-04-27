import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Username from './Username';


const InviteUser = ({ openInvite, setOpenInvite, group, user, users, members }) => {
    const invites = useSelector(state => state.invites.sent);

    let sentInvites = [];
    for (let invite in invites) {
        if (invites[invite].group_id === group.id) {
            sentInvites.push(invites[invite].invitee_id)
        }
    }

    let friends = [];
    if (user.friends) {
        for (let friend in user.friends) {
            friends.push(users[`"${user.friends[friend]}"`])
        }
    }

    console.log('friendss: ', friends)


    return (
        <div className='backdrop' onClick={() => setOpenInvite(false)} >
            <div className='group-header__invite' onClick={(e) => e.stopPropagation()} >
                {!friends.length ? null : friends.map(friend => {
                    return <Username currentUser={user} user={friend} key={friend.id} openInvite={openInvite} setOpenInvite={setOpenInvite} group={group} invites={invites} members={members} sentInvites={sentInvites} />
                })}
            </div>
        </div>
    )
}

export default InviteUser;