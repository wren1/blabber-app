import React from 'react';

import GroupHeader from './GroupHeader';
import GroupFeed from './GroupFeed';


const GroupContainer = ({ groupId, user }) => {

    if (!groupId) return null;

    return (
        <div className='group-container'>
            <GroupHeader groupId={groupId} user={user} />
            <GroupFeed groupId={groupId} user={user} />
        </div>
    )
}

export default GroupContainer;