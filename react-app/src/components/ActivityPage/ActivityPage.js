import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ReceivedInvitesList from './ReceivedInvitesList';
import SentInvitesList from './SentInvitesList';
import Navbar from '../Navbar/Navbar';
import SideBar from '../Sidebar/Sidebar';

import { loadInvites } from '../../store/ducks/invites';
// import { loadCurrentUser } from '../../store/ducks/currentUser';
import Sidebar from '../Sidebar/Sidebar';

const ActivityPage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser);
    const { received, sent } = useSelector(state => state.invites)

    useEffect(() => {
        (async () => {
            await dispatch(loadInvites())
        })();
    }, []);

    return (
        <div className='activity-page'>
            <SideBar user={user} />
            <Navbar />
            <ReceivedInvitesList invites={received} />
            <SentInvitesList invites={sent} />
        </div>
    )
}

export default ActivityPage;