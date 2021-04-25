import React from 'react';

import GroupPageHeader from './GroupPageHeader';
import GroupFeed from './GroupFeed';


const GroupContainer = ({ groupId, user }) => {

    if (!groupId) return null;

    return (
        <div className='group-container'>
            <GroupPageHeader groupId={groupId} user={user} />
            <GroupFeed groupId={groupId} user={user} />
        </div>
    )
}

export default GroupContainer;