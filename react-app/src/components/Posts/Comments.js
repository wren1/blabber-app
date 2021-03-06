import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Comment from './Comment';
import CommentForm from './CommentContent';


const Comments = ({ post, commentIds, users }) => {
    const allComments = useSelector(state => state.comments)
    const comments = [];
    console.log('ids: ', commentIds)
    if (commentIds) {
        console.log('all: ', allComments)
        commentIds.forEach(id => comments.push(allComments[`"${id}"`]))
    }


    console.log('COMMENTS: ', comments)
    if (!commentIds) {
        return (
        <div className='comments-container'>
            <CommentForm post={post}/>
        </div>
        );
    } else {

    return (
        <div className='comments-container'>
            
            {comments.map(comment => 
                (
                    <Comment comment={comment} key={comment.id} />
                ))}
            <CommentForm post={post}/>
        </div>
    )}
}

export default Comments;