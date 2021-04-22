import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Link from '../Link';


const SentInvite = ({ invite }) => {
    const invitee = useSelector(state => state.users[`"${invite.invitee_id}"`]);
    const group = useSelector(state => state.groups[`"${invite.group_id}"`]);
    if (!invitee) return null;

    if (invite.type !== 'group') {
        return (
            <div className='invites-list__item'>
                <Link item={invitee} /> has not yet accepted your friend request.
            </div>
        )
    } else {
        return (
            <div className='invites-list__item'>
                <Link item={invitee} /> has not yet accepted your invitation to <Link item={group} />
            </div>
        )
    }
}

export default SentInvite;