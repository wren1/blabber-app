import React from 'react';
import { NavLink } from 'react-router-dom';

import ProfileIcon from '../ProfileIcon';


const SearchResult = ({ item }) => {

    let type;
    if (item.username) {
        type = 'user';
    } else {
        type = 'group';
    }

    return (
        <NavLink to={`/${type}s/${item.id}`} exact={true} activeClassName="active">
            <div className={`searchresult-${type} searchresult`}>
                <ProfileIcon user={type === 'user' ? item : null} group={type === 'group' ? item : null} size={'med'} />
                <div className='searchuser-username'>{user.username}</div>
            </div>
        </NavLink>
    )
}

export default SearchResult;