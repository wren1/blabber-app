import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const PostHeader = ({ post, user }) => {


    return (
        <div className='post-header'>
            <div>{user.username}</div>
            <div>{post.title}</div>
        </div>
    )
}

export default PostHeader;