import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SentInvite from './SentInvite';


const SentInvitesList = ({ invites }) => {


    return (
        <div className='invites-list'>
            {!invites.length ? null : invites.forEach(invite => {
                return (
                    <SentInvite invite={invite} key={invite.id} />
                )}
            )}
        </div>
    )
}

export default SentInvitesList;