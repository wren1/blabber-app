import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Friend from './Friend';


const FriendsList = ({ userId }) => {
    const users = useSelector(state => state.users)
    const currentUser = useSelector(state => state.currentUser)
    const friends = [];
    let user = users[`"${userId}"`]
    if (user) {
        for (let id in users) {
            if (user['friends'].includes(users[id].id)) {
                friends.push(users[id])
            }
        }
    }
    console.log('friuends: ', friends)

    return (
        <div className='friendslist-main'>
            
            {
                friends.map(friend => {
                    return <Friend friend={friend} key={friend.id} />
                })
            }
            
        </div>
    )
}

export default FriendsList;