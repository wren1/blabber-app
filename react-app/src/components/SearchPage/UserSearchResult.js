import React from 'react';
import { NavLink } from 'react-router-dom';

import ProfileIcon from '../ProfileIcon';


const UserSearchResult = ({ user }) => {

    return (
        <NavLink to={`/users/${user.id}`} exact={true} activeClassName="active">
            <div className='searchresult-user searchresult'>
                <ProfileIcon user={user} size={'med'} />
                <div className='searchuser-username'>{user.username}</div>
            </div>
        </NavLink>
    )
}

export default UserSearchResult;