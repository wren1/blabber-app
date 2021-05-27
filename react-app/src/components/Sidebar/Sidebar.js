import React from 'react';
import { useSelector } from 'react-redux';


import GroupsList from './GroupsList';


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