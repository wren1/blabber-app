import React from 'react';
import { useHistory } from 'react-router-dom';

import ProfileIcon from '../ProfileIcon';


const GroupsListItem = ({ group }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/groups/${group.id}`)
    }

    if (!group) return null;

    return (
        <div className='sidebar__list-item' onClick={handleClick}>
            <ProfileIcon group={group} size={'small'} />
            <div className='sidebar__list-name'>
                {group.name}
            </div>
        </div>
    )
}

export default GroupsListItem;