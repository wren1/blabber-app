import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ReceivedInvite from './ReceivedInvite';


const ReceivedInvitesList = ({ invites }) => {

    let received = [];
    for (let invite in invites) {
        received.push(invites[invite])
    }
    console.log(received)

    return (
        <div className='invites-list'>
            <div className='invites-list__header'>
                You have {!received.length ? 0 : received.length} {received.length === 1 ? 'notification' : 'notifications.'}
            </div>
            <div className='invites-list__body'>
            {!received.length ? null : received.map(invite => {
                return (
                    <ReceivedInvite invite={invite} key={invite.id} />
                )}
            )}
            </div>
        </div>
    )
}

export default ReceivedInvitesList;