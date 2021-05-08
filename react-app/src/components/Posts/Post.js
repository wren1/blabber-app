import React, { useState } from 'react';

import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';


const Post = ({ post, user }) => {
    const [openComments, setOpenComments] = useState(false)

    if (post === undefined || user === undefined) return null;

    return (
        <div className='post'>
            <PostHeader post={post} user={user} />
            <PostContent post={post} />
            <PostFooter post={post} user={user} setOpenComments={setOpenComments} openComments={openComments} />
        </div>
    )
}

export default Post;