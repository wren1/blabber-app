import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

import MembersList from './MembersList';
import InviteUser from './InviteUser';
import IconWithName from '../IconWithName';


const GroupDetails = ({ group, user, users }) => {
    const [openMembersList, setOpenMembersList] = useState(false)
    const [openInvite, setOpenInvite] = useState(false)
    const members = group.users.map(user => users[`"${user}"`]);


    return (
        <div className='group-header__desc'>
            <div className='group-header__title-invite'>
                <IconWithName item={group} />
                <div className='group-header__invite-button' onClick={() => setOpenInvite(!openInvite)}>
                        <GroupAddIcon />
                </div>
            </div>
            <div className='group-header__desc-description'>
                {group.description}
            </div>
            <div className='group-header__desc-members-button' onClick={() => setOpenMembersList(!openMembersList)}>
                <PersonIcon />
                <div>
                    {!members.length ? 0 : members.length}
                </div>
            </div>
            {!openMembersList ? null : <MembersList openMembersList={openMembersList} setOpenMembersList={setOpenMembersList} members={members} group={group} />}
            {!openInvite ? null : <InviteUser openInvite={openInvite} setOpenInvite={setOpenInvite} members={members} group={group} user={user} users={users} />}
        </div>
    )
}

export default GroupDetails;