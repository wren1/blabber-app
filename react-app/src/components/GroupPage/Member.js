import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


const Member = ({ member, group }) => {
    const history = useHistory();
    let isMod = group.moderators.includes(member.id);
    let isOwner = (group.user_id === member.id);
    const [mod, setMod] = useState(isMod);
    const [owner, setOwner] = useState(isOwner)

    if (!member) return null;

    const handleClick = () => {
        history.push(`/users/${member.id}`)
    }


    return (
        <div className='group__members-list-item' onClick={handleClick}>
            {member.username} {!group.users[member.id] ? null : `(moderator)`}
        </div>
    )
}

export default Member;