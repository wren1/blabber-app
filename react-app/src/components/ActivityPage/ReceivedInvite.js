import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import AddIcon from '@material-ui/icons/Add'

import { acceptFriendRequest } from '../../store/ducks/invites'


const ReceivedInvite = ({ invite }) => {
    const dispatch = useDispatch()
    const inviter = useSelector(state => state.users[`"${invite.inviter_id}"`]);
    const group = useSelector(state => state.groups[`"${invite.group_id}"`]);
    if (!inviter) return null;

    const handleAddFriend = () => {
        dispatch(acceptFriendRequest(inviter.id))
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
            <AddIcon className={'add-friend'} onClick={handleAddFriend}/>
        </div>
        </div>
    )
}

export default ReceivedInvite;