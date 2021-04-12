import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';

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