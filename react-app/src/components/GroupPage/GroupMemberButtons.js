import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import GroupAddIcon from '@material-ui/icons/GroupAdd';


const GroupMemberButtons = ({ members, openMembersList, setOpenMembersList, openInvite, setOpenInvite }) => {
    
    return (
        <div className='group__header-member-buttons' >
            <div className='group__header-members-button' onClick={() => setOpenMembersList(!openMembersList)}>
                <PersonIcon className='group__header-members-icon'/>
                {!members.length ? '0 Members' : `${members.length} ${members.length === 1 ? `member` : `members`}`}
            </div>
            <div className={'group__header-invite-button'} onClick={() => setOpenInvite(!openInvite)}>
                <GroupAddIcon className='group__header-invite-icon'/>
                Invite Friends
            </div>
        </div>
    )
}

export default GroupMemberButtons;