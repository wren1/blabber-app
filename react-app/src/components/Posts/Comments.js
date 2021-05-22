import React from 'react';
import { useSelector } from 'react-redux';

import Comment from './Comment';
import CommentForm from './CommentForm';


const Comments = ({ post, commentIds }) => {
    const allComments = useSelector(state => state.comments)

    const comments = [];

    if (commentIds) {
        commentIds.forEach(id => comments.push(allComments[`"${id}"`]))
    }
    
    if (commentIds.length !== comments.length) return null;

    return (
        <div className='comments-container'>
            
            {!commentIds ? null : comments.map(comment => 
                (
                    <Comment comment={comment} key={comment.id} />
                ))}
            <CommentForm post={post} comments={comments} />
        </div>
    )
}

export default Comments;