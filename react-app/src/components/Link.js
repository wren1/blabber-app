import React from 'react';
import { NavLink } from 'react-router-dom';

import ProfileIcon from './ProfileIcon';


const Link = ({ item }) => {
    if (!item) return null;
    if (item.username) {
        return (
            <NavLink to={`/users/${item.id}`} exact={true} className='invites-list__link'>
                <ProfileIcon user={item} size={'small'} /> 
                 {item.username}
            </NavLink>
        )
    } else {
        return (
            <NavLink to={`/groups/${item.id}`} exact={true} className='invites-list__link'>
                <ProfileIcon  group={item} size={'small'} />
                 {item.name}
            </NavLink>
        )
    }
}

export default Link;