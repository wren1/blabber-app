import React from 'react';
import { useSelector } from 'react-redux';

import GroupPageHeader from './GroupPageHeader';
import GroupFeed from './GroupFeed';


const GroupContainer = ({ groupId, user }) => {

    if (!groupId) return null;

    return (
        <div className='group-header'>
            <GroupPageHeader groupId={groupId} user={user} />
            <GroupFeed groupId={groupId} user={user} />
        </div>
    )
}

export default GroupContainer;