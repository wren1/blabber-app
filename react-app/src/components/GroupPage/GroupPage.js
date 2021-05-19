import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import GroupContainer from './GroupContainer';
import Sidebar from '../Sidebar/Sidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import Loading from '../Loading';
import Navbar from '../Navbar/Navbar';

import { loadGroupPosts } from '../../store/ducks/posts';
import { loadInvites } from '../../store/ducks/invites';
import { loadCurrentUser } from '../../store/ducks/currentUser';
import { loadGroupMembers, loadCurrentUserFriends } from '../../store/ducks/users';
import { loadCurrentUserGroups } from '../../store/ducks/groups';


const GroupPage = ({ setAuthenticated }) => {
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    const { groupId } = useParams();
    
    const user = useSelector(state => state.currentUser)
        
    
    useEffect(() => {
        (async () => {
            await dispatch(loadCurrentUser())
            await dispatch(loadInvites())
            await dispatch(loadCurrentUserFriends())
            await dispatch(loadCurrentUserGroups())
            await dispatch(loadGroupPosts(groupId))
            await dispatch(loadGroupMembers(groupId))
            await dispatch(loadInvites())
            setLoaded(true)
        })()
    }, [groupId])
    
    if (!groupId) return null;
    
    return (
        <div className='main' >
            {!loaded ? <Loading /> : null}
            <Navbar user={user} setAuthenticated={setAuthenticated} />
            <div className='mainpage' >
                <Sidebar user={user} />
                <GroupContainer groupId={groupId} user={user}/>
                <RightSidebar user={user} setAuthenticated={setAuthenticated} />
            </div>
        </div>
    )
}

export default GroupPage;