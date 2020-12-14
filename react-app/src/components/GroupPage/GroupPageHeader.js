import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import GroupDetails from './GroupDetails';
import GroupHeader from './GroupHeader';


const GroupPageHeader = ({ groupId }) => {
    const dispatch = useDispatch();
    const group = useSelector(state => state.groups[`"${groupId}"`])
    const user = useSelector(state => state.currentUser)
    if (!group) return null;
    console.log('GROUP DESC: ', group)
    return (
        <div className='group-header'>
            <GroupHeader group={group} user={user} />
            <GroupDetails group={group} user={user} />
        </div>
    )
}

export default GroupPageHeader;