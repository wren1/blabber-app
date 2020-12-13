import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import MembersList from './MembersList';


const GroupDetails = ({ group }) => {
    const [openMembersList, setOpenMemberslist] = useState(false)
    const users = useSelector(state => state.users);
    const members = group.users.map(user => users[`"${user}"`]);
    console.log('mems: ', members)

    const handleMembersClick = () => {
        setOpenMemberslist(true);
    }

    return (
        <div className='group-header__desc'>
            <div className='group-header__desc-namae'>{group.name}</div>
            <div className='group-header__desc-description'>{group.description}</div>
            <div className='group-header__desc-members-button' onClick={handleMembersClick}>members</div>
            {!openMembersList ? null : <MembersList openMembersList={openMembersList} setOpenMemberslist={setOpenMemberslist} members={members} group={group} />}
        </div>
    )
}

export default GroupDetails;