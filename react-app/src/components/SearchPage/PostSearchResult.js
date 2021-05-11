import React from 'react';
import { useSelector } from 'react-redux';

import Post from '../Posts/Post';


const PostSearchResult = ({ post }) => {
    const user = useSelector(state => state.users[`"${post.user_id}"`]);

    return (
        <div className='searchresult-post'>
            <Post post={post} user={user} />
        </div>
    )
}

export default PostSearchResult;