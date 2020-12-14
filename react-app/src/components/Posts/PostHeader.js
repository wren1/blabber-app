import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import UserIcon from '../UserIcon';


const PostHeader = ({ post, user }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/users/${user.id}`)
    }


    return (
        <div className='post-header'>
            <div className='post-header__link'>
                <UserIcon user={user} />
                <div className='post-header__username' onClick={handleClick}>{user.username}</div>
            </div>
            <div className='post-header__title'>{post.title}</div>
        </div>
    )
}

export default PostHeader;