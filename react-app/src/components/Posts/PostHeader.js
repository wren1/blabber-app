import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import UserIcon from '../UserIcon';


const PostHeader = ({ post, user }) => {


    return (
        <div className='post-header'>
            <UserIcon user={user} />
            <div>{user.username}</div>
            <div>{post.title}</div>
        </div>
    )
}

export default PostHeader;