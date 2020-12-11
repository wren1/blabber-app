import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import GroupsListItem from './GroupsListItem';


const GroupsList = ({ groups }) => {
    // const groups = useSelector(state => state.currentUser.groups.map(groupId => state.groups[`"${groupId}"`]))
    // if (groups[undefined]) return null
    console.log('GROUPS: ', groups)

    return (
        <div className='sidebar__groupslist'>
            {!groups.length ? null : groups.map(group => {
                return (
                    <GroupsListItem group={group} key={group.id} />
                )}
            )}
        </div>
    )
}

export default GroupsList;