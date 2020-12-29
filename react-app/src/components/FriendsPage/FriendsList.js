import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Friend from './Friend';


const FriendsList = () => {
    const users = useSelector(state => state.users)
    const friends = [];
    for (let id in users) {
        friends.push(users[id])
    }

    return (
        <div className='frinedslist'>

        </div>
    )
}

export default FriendsList;