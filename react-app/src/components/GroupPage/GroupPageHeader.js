import React from 'react';
import { useSelector } from 'react-redux';

import GroupDetails from './GroupDetails';
import GroupHeader from './GroupHeader';


const GroupPageHeader = ({ groupId, user }) => {
    const group = useSelector(state => state.groups[`"${groupId}"`])
    const users = useSelector(state => state.users)

    if (!group) return null;

    return (
        <div className='group-header'>
            <GroupHeader group={group} user={user} users={users} />
            <GroupDetails group={group} user={user} users={users} />
        </div>
    )
}

export default GroupPageHeader;