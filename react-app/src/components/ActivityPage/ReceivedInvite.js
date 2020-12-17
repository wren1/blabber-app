import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import AddIcon from '@material-ui/icons/Add'

import { acceptFriendRequest, declineFriendRequest, acceptGroupInvite, declineGroupInvite } from '../../store/ducks/invites'


const ReceivedInvite = ({ invite }) => {
    const dispatch = useDispatch()
    const inviter = useSelector(state => state.users[`"${invite.inviter_id}"`]);
    const group = useSelector(state => state.groups[`"${invite.group_id}"`]);
    if (!inviter) return null;

    const handleAcceptInvite = () => {
        if (invite.type === 'friend') {
            dispatch(acceptFriendRequest(inviter.id))
        } else {
            dispatch(acceptGroupInvite(inviter.id, group.id))
        }
    }

    return (
        <div className='invites-list__item'>
        <div >
            {invite.type !== 'group' ? 
            `You have a friend request from ${inviter.username}`
        :
            `You've been invited to ${group.name} by ${inviter.username}`
        }
        </div>
        <div>
            <AddIcon className={'add-friend'} onClick={handleAcceptInvite}/>
        </div>
        </div>
    )
}

export default ReceivedInvite;