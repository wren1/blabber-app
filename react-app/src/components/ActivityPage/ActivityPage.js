import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ReceivedInvitesList from './ReceivedInvitesList';
import SentInvitesList from './SentInvitesList';
import Navbar from '../Navbar/Navbar';
import SideBar from '../Sidebar/Sidebar';

import { loadInvites } from '../../store/ducks/invites';
import { loadFriends } from '../../store/ducks/users';
import { loadUserGroups } from '../../store/ducks/groups';

import Sidebar from '../Sidebar/Sidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import Loading from '../Loading';


const ActivityPage = () => {
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser);
    const { received, sent } = useSelector(state => state.invites)
    
    useEffect(() => {
        (async () => {
            await dispatch(loadInvites())
            await dispatch(loadUserGroups(user.id))
            setLoaded(true)
        })();
    }, []);
    
    return (
        <div className='activity-page'>
            {!loaded ? <Loading /> : null}
            <SideBar user={user} />
            <Navbar />
            <ReceivedInvitesList invites={received} />
            <SentInvitesList invites={sent} />
            <RightSidebar user={user} />
        </div>
    )
}

export default ActivityPage;