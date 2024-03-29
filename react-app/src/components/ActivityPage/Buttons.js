import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ReceivedInvite from './ReceivedInvite';

import { acceptFriendRequest, declineFriendRequest, acceptGroupInvite, declineGroupInvite } from '../../store/ducks/invites'



const Buttons = ({ invite, inviter, group }) => {
    const dispatch = useDispatch()
    
    if (!inviter) return null;

    const handleAccept = () => {
        if (invite.type === 'friend') {
            dispatch(acceptFriendRequest(inviter.id))
        } else {
            dispatch(acceptGroupInvite(inviter.id, group.id))
        }
    }

    const handleReject = () => {
        if (invite.type === 'friend') {
            dispatch(declineFriendRequest(inviter.id))
        } else {
            dispatch(declineGroupInvite(inviter.id, group.id))
        }
    }

    return (
        <div className='invites-list__buttons'>
            <div className='invites-list__accept-button button' onClick={handleAccept} >Accept</div>
            <div className='invites-list__decline-button button' onClick={handleReject} >Decline</div>
        </div>
    )
}

export default Buttons;