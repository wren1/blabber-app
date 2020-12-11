import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadUserGroups } from '../../store/ducks/groups';

import GroupsList from './GroupsList';


const Sidebar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser);
    // const groups = useSelector(state => state.currentUser.groups.map(groupId => state.groups[`"${groupId}"`]))
    const allGroups = useSelector(state => state.groups)

    let groups = []

    user.groups.forEach(groupId => {
        if (allGroups[`"${groupId}"`]) {
            if (allGroups[`"${groupId}"`] !== undefined) groups.push(allGroups[`"${groupId}"`])
        }
    })

    useEffect(() => {
        (async () => {
            await dispatch(loadUserGroups(user.id))
        })();
    }, []);


    return (
        <div className='sidebar'>
            <GroupsList groups={groups} />
        </div>
    )
}

export default Sidebar;