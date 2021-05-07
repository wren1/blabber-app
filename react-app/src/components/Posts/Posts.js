import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post';


const Posts = ({ posts }) => {
    const users = useSelector(state => state.users)
    if (!posts) return null;
    console.log('user p: ', posts)

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