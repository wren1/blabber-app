import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SentInvite from './SentInvite';


const SentInvitesList = ({ invites }) => {

    let sent = [];
    for (let invite in invites) {
        sent.push(invites[invite])
    }

    return (
        <div className='invites-list'>
            <div className='invites-list__header'>
                {!sent.length ? 0 : sent.length} pending {sent.length === 1 ? 'request' : 'requests'}
            </div>
            <div className='invites-list__body'>
            {!sent.length ? null : sent.map(invite => {
                return (
                    <SentInvite invite={invite} key={invite.id} />
                )}
            )}
            </div>
        </div>
    )
}

export default SentInvitesList;