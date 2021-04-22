import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import AddIcon from '@material-ui/icons/Add'

import Link from '../Link';
import Buttons from './Buttons';

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

    if (invite.type !== 'group') {
        return (
            <div className='invites-list__item'>
                You have a friend request from 
                <Link item={inviter} />
                <Buttons invite={invite} />
            </div>
        )
    } else {
        return (
            <div className='invites-list__item'>
                <Link item={inviter} />
                 has invited you to the group 
                 <Link item={group} />
                 <Buttons invite={invite} />
            </div>
        )
    }
}

export default ReceivedInvite;