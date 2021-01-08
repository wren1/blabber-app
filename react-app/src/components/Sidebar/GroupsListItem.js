import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import ProfileIcon from '../ProfileIcon';


const GroupsListItem = ({ group }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/groups/${group.id}`)
    }

    if (!group) return null;

    return (
        <div className='sidebar__groupslist-item' onClick={handleClick}>
            <ProfileIcon group={group} size={'small'} />
            <div className='sidebar__grouplist-name'>
                {group.name}
            </div>
        </div>
    )
}

export default GroupsListItem;