import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ReceivedInvite from './ReceivedInvite';


const ReceivedInvitesList = ({ invites }) => {
    return (
        <div className='invites-list'>
            {!invites.length ? null : invites.forEach(invite => {
                return (
                    <ReceivedInvite invite={invite} key={invite.id} />
                )}
            )}
        </div>
    )
}

export default ReceivedInvitesList;