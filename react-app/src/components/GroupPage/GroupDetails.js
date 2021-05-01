import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

import MembersList from './MembersList';
import InviteUser from './InviteUser';
import HeaderIcon from '../HeaderIcon';
import GroupMemberButtons from './GroupMemberButtons';


const GroupDetails = ({ group, user, users }) => {
    const [openMembersList, setOpenMembersList] = useState(false)
    const [openInvite, setOpenInvite] = useState(false)
    const members = group.users.map(user => users[`"${user}"`]);


    return (
        <div className='group__header-info'>
            <HeaderIcon item={group} />
            <div className='group__header-description'>
                {group.description || null}
            </div>
            <GroupMemberButtons members={members} openInvite={openInvite} setOpenInvite={setOpenInvite} openMembersList={openMembersList} setOpenMembersList={setOpenMembersList} />
            {!openMembersList ? null : <MembersList openMembersList={openMembersList} setOpenMembersList={setOpenMembersList} members={members} group={group} />}
            {!openInvite ? null : <InviteUser openInvite={openInvite} setOpenInvite={setOpenInvite} members={members} group={group} user={user} users={users} />}
        </div>
    )
}

export default GroupDetails;