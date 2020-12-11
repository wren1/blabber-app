import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Post from './Post';


const Posts = ({ posts }) => {
    const users = useSelector(state => state.users)


    return (
        <div className='posts'>
            {!posts.length ? null : posts.map(post => {
                return (
                    <Post post={post} user={users[`"${post.user_id}"`]} key={post.id} />
                )
            })}
        </div>
    )
}

export default Posts;