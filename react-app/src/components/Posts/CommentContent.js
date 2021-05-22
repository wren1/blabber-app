import React from 'react';


const CommentContent = ({ comment }) => {
    if (!comment) return null;

    return (
        <div className='comment-content'>
            {comment.content}
        </div>
    )
}

export default CommentContent;