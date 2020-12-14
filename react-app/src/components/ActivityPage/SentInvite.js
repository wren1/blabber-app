import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const SentInvite = ({ invite }) => {
    const invitee = useSelector(state => state.users[`"${invite.invitee_id}"`]);
    const group = useSelector(state => state.groups[`"${invite.group_id}"`]);
    if (!invitee) return null;
    console.log('I: ', invite)
    return (
        <div className='invites-list__item'>
            {invite.type !== 'group' ? `${invitee.username} has not yet accepted your friend request.` :
                `${invitee.username} has not yet accepted your invitation to ${group.name}`
            }
        </div>
    )
}

export default SentInvite;