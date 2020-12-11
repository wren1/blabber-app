import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


const GroupsListItem = ({ group }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/groups/${group.id}`)
    }

    return (
        <div className='sidebar__groupslist-item' onClick={handleClick}>
            {group.name}
        </div>
    )
}

export default GroupsListItem;