import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';

import GroupsListItem from './GroupsListItem';


const GroupsList = ({ groups }) => {

    
    return (
        <div className='sidebar__list'>
            <div className='new-group-button'>
                <NavLink to='/new-group' exact={true} className='sidebar-button'>
                    Create Group
                </NavLink>
            </div>
            <div className='sidebar-title'>
                Groups
            </div>
            {!groups.length ? null : groups.map(group => {
                return (
                    <GroupsListItem group={group} key={group.id} />
                )}
            )}
        </div>
    )
}

export default GroupsList;