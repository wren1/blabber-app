import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import GroupPageHeader from './GroupPageHeader';
import GroupFeed from './GroupFeed';

import { loadGroupPosts } from '../../store/ducks/posts';
import { loadGroupMembers } from '../../store/ducks/users'; 


const GroupPage = () => {
    const dispatch = useDispatch();
    const { groupId } = useParams()

    console.log(groupId)

    useEffect(() => {
        (async () => {
            await dispatch(loadGroupPosts(groupId))
            await dispatch(loadGroupMembers(groupId))
        })()
    }, [])

    return (
        <div className='group-main'>
            <GroupPageHeader groupId={groupId}/>
            <GroupFeed groupId={groupId} />
        </div>
    )
}

export default GroupPage;