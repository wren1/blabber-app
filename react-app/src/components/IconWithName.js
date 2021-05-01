import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';

import ProfileIcon from './ProfileIcon';


const IconWithName = ({ item }) => {
    if (!item) return null;
    if (item.username) {
        return (
            <NavLink to={`/users/${item.id}`} exact={true} className='header-icon'>
                <ProfileIcon user={item} size={'large'} /> 
                 {item.username}
            </NavLink>
        )
    } else {
        return (
            <NavLink to={`/groups/${item.id}`} exact={true} className='header-icon'>
                <ProfileIcon  group={item} size={'large'} />
                 {item.name}
            </NavLink>
        )
    }
}

export default IconWithName;