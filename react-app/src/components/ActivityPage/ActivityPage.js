import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import SideBar from '../Sidebar/Sidebar';
import ActivityContainer from './ActivityContainer';

import { loadInvites } from '../../store/ducks/invites';
import { loadFriends } from '../../store/ducks/users';
import { loadUserGroups } from '../../store/ducks/groups';

import Sidebar from '../Sidebar/Sidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import Loading from '../Loading';


const ActivityPage = ({ setAuthenticated }) => {
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
        <div className='activity'>
            {!loaded ? <Loading /> : null}
            <Navbar />
            <div className='activity__main'>
                <SideBar user={user} />
                <ActivityContainer received={received} sent={sent} />
                <RightSidebar user={user} setAuthenticated={setAuthenticated} />
            </div>
        </div>
    )
}

export default ActivityPage;