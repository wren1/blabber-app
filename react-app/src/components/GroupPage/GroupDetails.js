import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

import MembersList from './MembersList';
import InviteUser from './InviteUser';


const GroupDetails = ({ group, user, users }) => {
    const [openMembersList, setOpenMemberslist] = useState(false)
    const [openInvite, setOpenInvite] = useState(false)
    const members = group.users.map(user => users[`"${user}"`]);

    const handleMembersClick = () => {
        setOpenMemberslist(!openMembersList);
    }

    return (
        <div className='group-header__desc'>
            <div className='group-header__title-invite'>
                <div className='group-header__desc-name'>
                    {group.name}
                </div>
                <div className='group-header__invite-button' onClick={() => setOpenInvite(!openInvite)}>
                        <GroupAddIcon />
                </div>
            </div>
            <div className='group-header__desc-description'>{group.description}</div>
                <div className='group-header__desc-members-button' onClick={handleMembersClick}>
                        <PersonIcon />
                <div>{!members.length ? 0 : members.length}</div>
            </div>
            {!openMembersList ? null : <MembersList openMembersList={openMembersList} setOpenMemberslist={setOpenMemberslist} members={members} group={group} />}
            {!openInvite ? null : <InviteUser openInvite={openInvite} setOpenInvite={setOpenInvite} members={members} group={group} user={user} users={users} />}
        </div>
    )
}

export default GroupDetails;