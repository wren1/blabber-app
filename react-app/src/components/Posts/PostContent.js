import React from 'react';


const PostContent = ({ post }) => {

    return (
        <div className='post-body'>
            <div className='post-body__title'>
                {post.title}
            </div>
            <div className='post-content'>
                {post.content}
            </div>
        </div>
    )
}

export default PostContent;