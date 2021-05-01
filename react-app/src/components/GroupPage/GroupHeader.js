import React from 'react';
import { useSelector } from 'react-redux';

import GroupDetails from './GroupDetails';
import Banner from '../Banner';


const GroupHeader = ({ groupId, user }) => {
    const group = useSelector(state => state.groups[`"${groupId}"`])
    const users = useSelector(state => state.users)

    if (!group) return null;

    // group.banner_url = 'https://i.pinimg.com/originals/50/c5/1e/50c51e02a205b44c3449fc128400ff20.jpg';


    return (
        <div className='group__header'>
            <Banner group={group} />
            <GroupDetails group={group} user={user} users={users} />
        </div>
    )
}

export default GroupHeader;