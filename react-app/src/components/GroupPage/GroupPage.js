import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import GroupPageHeader from './GroupPageHeader';
import GroupFeed from './GroupFeed';
import Sidebar from '../Sidebar/Sidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import Loading from '../Loading';

import { loadGroupPosts } from '../../store/ducks/posts';
import { loadGroupMembers, loadFriends } from '../../store/ducks/users';
import { loadInvites } from '../../store/ducks/invites';


const GroupPage = () => {
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    const { groupId } = useParams();
    
    const user = useSelector(state => state.currentUser)
        
    
    useEffect(() => {
        (async () => {
            await dispatch(loadGroupPosts(groupId))
            await dispatch(loadGroupMembers(groupId))
            await dispatch(loadFriends(user.id))
            await dispatch(loadInvites())
            setLoaded(true)
        })()
    }, [groupId])
    
    if (!groupId) return null;
    
    return (
        <div className='group-main'>
            {!loaded ? <Loading /> : null}
            <Sidebar user={user} />
            <GroupPageHeader groupId={groupId} user={user} />
            <GroupFeed groupId={groupId} user={user} />
            <RightSidebar user={user} />
        </div>
    )
}

export default GroupPage;