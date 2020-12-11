import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Comment from './Comment';


const Comments = ({ post, commentIds, users }) => {
    const allComments = useSelector(state => state.comments)
    const comments = [];
    console.log('ids: ', commentIds)
    if (commentIds) {
        console.log('all: ', allComments)
        commentIds.forEach(id => comments.push(allComments[`"${id}"`]))
    }

    console.log('COMMENTS: ', comments)
    if (!commentIds) return null;

    return (
        <div className='comments'>
            {!comments ? null : comments.map(comment => 
                (
                    <Comment comment={comment} key={comment.id} />
                ))}
        </div>
    )
}

export default Comments;