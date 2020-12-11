import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import UserIcon from '../UserIcon';


const UserSearchResult = ({ user }) => {

    return (
        <div className='searchresult-user searchresult'>
            <UserIcon user={user} />
            <div>{user.username}</div>
        </div>
    )
}

export default UserSearchResult;