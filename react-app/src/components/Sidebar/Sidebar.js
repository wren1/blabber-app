import React, { useState, useEffect } from 'react';

import GroupsList from './GroupsList';
import HomeButton from './HomeButton';


const Sidebar = ({ user }) => {

    const allGroups = useSelector(state => state.groups)


    let groups = []

    if (user) {

    
    user.groups.forEach(groupId => {
        if (allGroups[`"${groupId}"`]) {
            if (allGroups[`"${groupId}"`] !== undefined) groups.push(allGroups[`"${groupId}"`])
        }
    })}


    return (
        <div className='left-sidebar sidebar'>
            <GroupsList groups={groups} />
        </div>
    )
}

export default Sidebar;