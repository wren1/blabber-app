import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ReceivedInvitesList from './ReceivedInvitesList';
import SentInvitesList from './SentInvitesList';


const ActivityContainer = ({ received, sent }) => {
    
    return (
        <div className='activity__container'>
            <ReceivedInvitesList invites={received} />
            <SentInvitesList invites={sent} />
        </div>
    )
}

export default ActivityContainer;