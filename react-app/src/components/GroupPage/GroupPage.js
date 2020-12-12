import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import GroupPageHeader from './GroupPageHeader';
import GroupFeed from './GroupFeed';

import { loadGroupPosts } from '../../store/ducks/posts';


const GroupPage = () => {
    const dispatch = useDispatch();
    const { groupId } = useParams()

    console.log(groupId)

    useEffect(() => {
        (async () => {
            await dispatch(loadGroupPosts(groupId))
        })()
    }, [])

    return (
        <div className='group-main'>
            <GroupPageHeader />
            <GroupFeed />
        </div>
    )
}

export default GroupPage;