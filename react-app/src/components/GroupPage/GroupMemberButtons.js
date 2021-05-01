import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import GroupAddIcon from '@material-ui/icons/GroupAdd';


const GroupMemberButtons = ({ members, openMembersList, setOpenMembersList, openInvite, setOpenInvite }) => {
    
    return (
        <div className='group__header-member-buttons' >
            <GroupAddIcon className='group__header-invite' onClick={() => setOpenInvite(!openInvite)}/>
            <div className='group-header__desc-members-button' onClick={() => setOpenMembersList(!openMembersList)}>
                <PersonIcon />
                {!members.length ? 0 : members.length}
            </div>
        </div>
    )
}

export default GroupMemberButtons;